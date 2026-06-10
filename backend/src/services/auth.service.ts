import { pool } from "../config/db";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

import { sendDoctorApprovalEmail, sendDoctorRejectEmail } from "../utils/mail";
import { generateOTP } from "../utils/otp";
import { sendOTPEmail } from "../utils/mail";
import { generateToken } from "../utils/jwt";

export const registerPatientService = async (
  data: any
) => {

  const {
    firstName,
    lastName,
    dob,
    sex,
    phone,
    email,
    password
  } = data;

  const [existing]: any = await pool.query(
    "SELECT * FROM users WHERE email=?",
    [email]
  );

  if (existing.length > 0) {
    throw new Error("Email already exists");
  }

  const otp = generateOTP();

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const expiresAt = new Date(
    Date.now() + 10 * 60 * 1000
  );

  await pool.query(
    `
    INSERT INTO email_otps
    (
      id,
      email,
      otp,
      first_name,
      last_name,
      dob,
      sex,
      phone,
      password_hash,
      expires_at
    )
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      uuid(),
      email,
      otp,
      firstName,
      lastName,
      dob,
      sex,
      phone,
      hashedPassword,
      expiresAt
    ]
  );

  await sendOTPEmail(email, otp);

  return {
    message: "OTP sent successfully"
  };
};

export const verifyOTPService = async (
  email: string,
  otp: string
) => {

  const [rows]: any = await pool.query(
    `
    SELECT *
    FROM email_otps
    WHERE email=?
    ORDER BY created_at DESC
    LIMIT 1
    `,
    [email]
  );

  if (rows.length === 0) {
    throw new Error("OTP not found");
  }

  const record = rows[0];

  if (record.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (
    new Date() >
    new Date(record.expires_at)
  ) {
    throw new Error("OTP expired");
  }

  const userId = `U${Date.now()}`;

  await pool.query(
    `
    INSERT INTO users
    (
      id,
      email,
      password_hash,
      role
    )
    VALUES
    (?, ?, ?, 'PATIENT')
    `,
    [
      userId,
      record.email,
      record.password_hash
    ]
  );

  const patientId = `P${Date.now()}`;

  await pool.query(
    `
    INSERT INTO patients
    (
      id,
      user_id,
      mrn,
      first_name,
      last_name,
      dob,
      sex,
      phone,
      email
    )
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
    [
      patientId,
      userId,
      `MRN${Date.now()}`,
      record.first_name,
      record.last_name,
      record.dob,
      record.sex,
      record.phone,
      record.email
    ]
  );

  await pool.query(
    `
    DELETE FROM email_otps
    WHERE id=?
    `,
    [record.id]
  );

  const token = generateToken(
    userId,
    "PATIENT"
  );

  return {
    token,
    userId,
    patientId
  };
};

// export const loginService = async (
//   email: string,
//   password: string
// ) => {

//   const [rows]: any = await pool.query(
//     `
//     SELECT *
//     FROM users
//     WHERE email=?
//     `,
//     [email]
//   );

//   if (rows.length === 0) {
//     throw new Error("User not found");
//   }

//   const user = rows[0];

//   const valid = await bcrypt.compare(
//     password,
//     user.password_hash
//   );

//   if (!valid) {
//     throw new Error("Invalid credentials");
//   }

//   const token = generateToken(
//     user.id,
//     user.role
//   );

//   return {
//     token,
//     role: user.role,
//     userId: user.id
//   };
// };

export const loginService = async (
  email: string,
  password: string
) => {

  const [rows]: any =
    await pool.query(
      `
      SELECT *
      FROM users
      WHERE email=?
      `,
      [email]
    );

  if (rows.length === 0) {
    throw new Error(
      "User not found"
    );
  }

  const user = rows[0];

  const valid =
    await bcrypt.compare(
      password,
      user.password_hash
    );

  if (!valid) {
    throw new Error(
      "Invalid credentials"
    );
  }

  // Doctor Approval Check
  if (
    user.role === "PROVIDER" &&
    user.approval_status !== "APPROVED"
  ) {
    throw new Error(
      "Your account is pending admin approval"
    );
  }

  const token =
    generateToken(
      user.id,
      user.role
    );

  return {
    token,
    role: user.role,
    userId: user.id
  };
};

export const registerDoctorService =
async(
 data:any,
 file:any
)=>{

 const {
   name,
   email,
   password,
   specialty,
   npi_or_mci,
   bio,
   languages
 } = data;

 if(!file){
   throw new Error(
     "Doctor ID card required"
   );
 }

 const [existing]:any =
 await pool.query(
   "SELECT * FROM users WHERE email=?",
   [email]
 );

 if(existing.length > 0){
   throw new Error(
     "Email already exists"
   );
 }

 const otp = generateOTP();

 const hashedPassword =
 await bcrypt.hash(
   password,
   10
 );

 const expires =
 new Date(
   Date.now() + 10*60*1000
 );

 await pool.query(
 `
 INSERT INTO doctor_otps
 (
  id,
  email,
  otp,
  name,
  specialty,
  npi_or_mci,
  bio,
  languages,
  password_hash,
  file_name,
  mime_type,
  file_data,
  expires_at
 )
 VALUES
 (?,?,?,?,?,?,?,?,?,?,?,?,?)
 `,
 [
  uuid(),
  email,
  otp,
  name,
  specialty,
  npi_or_mci,
  bio,
  JSON.stringify(languages),
  hashedPassword,
  file.originalname,
  file.mimetype,
  file.buffer,
  expires
 ]
 );

 await sendOTPEmail(
   email,
   otp
 );

 return {
   message:
   "OTP sent successfully"
 };

};

export const verifyDoctorOTPService =
async (
  email: string,
  otp: string
) => {

  const [rows]: any =
    await pool.query(
      `
      SELECT *
      FROM doctor_otps
      WHERE email = ?
      ORDER BY created_at DESC
      LIMIT 1
      `,
      [email]
    );

  if (rows.length === 0) {
    throw new Error("OTP not found");
  }

  const record = rows[0];

  if (record.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (
    new Date() >
    new Date(record.expires_at)
  ) {
    throw new Error("OTP expired");
  }

  const userId = `U${Date.now()}`;

  await pool.query(
    `
    INSERT INTO users
    (
      id,
      email,
      password_hash,
      role,
      approval_status
    )
    VALUES
    (?, ?, ?, 'PROVIDER', 'PENDING')
    `,
    [
      userId,
      record.email,
      record.password_hash
    ]
  );

  const providerId = `D${Date.now()}`;

  await pool.query(
    `
    INSERT INTO providers
    (
      id,
      user_id,
      name,
      specialty,
      npi_or_mci,
      bio,
      languages,
      accepting_new,
      verification_status,
      is_verified
    )
    VALUES
    (?, ?, ?, ?, ?, ?, ?, TRUE, 'PENDING', FALSE)
    `,
    [
      providerId,
      userId,
      record.name,
      record.specialty,
      record.npi_or_mci,
      record.bio,
      record.languages
    ]
  );

  await pool.query(
    `
    INSERT INTO provider_documents
    (
      id,
      provider_id,
      document_type,
      file_name,
      mime_type,
      file_data
    )
    VALUES
    (?, ?, ?, ?, ?, ?)
    `,
    [
      uuid(),
      providerId,
      "DOCTOR_ID",
      record.file_name,
      record.mime_type,
      record.file_data
    ]
  );

  await pool.query(
    `
    DELETE FROM doctor_otps
    WHERE id=?
    `,
    [record.id]
  );

  return {
    providerId,
    status:
      "Registration successful. Waiting for admin approval."
  };
};