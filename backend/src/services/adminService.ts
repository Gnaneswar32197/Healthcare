import { pool } from "../config/db";
import {
  sendDoctorApprovalEmail,
  sendDoctorRejectEmail
} from "../utils/mail";


export const getPendingDoctorsService =
async () => {

  const [rows] : any =
  await pool.query(
    `
    SELECT
      p.id,
      p.name,
      p.specialty,
      u.email,
      p.verification_status
    FROM providers p
    JOIN users u
      ON p.user_id = u.id
    WHERE p.verification_status='PENDING'
    `
  );

  return rows;
};

export const getDoctorByIdService =
async (
  providerId:string
)=>{

 const [rows]:any =
 await pool.query(
 `
 SELECT
 p.*,
 u.email
 FROM providers p
 JOIN users u
 ON p.user_id=u.id
 WHERE p.id=?
 `,
 [providerId]
 );

 if(rows.length===0){
   throw new Error(
     "Doctor not found"
   );
 }

 return rows[0];
};

export const approveDoctorService =
async (
 providerId:string
)=>{

 const [rows]:any =
 await pool.query(
 `
 SELECT
 p.*,
 u.email,
 u.id AS user_id
 FROM providers p
 JOIN users u
 ON p.user_id=u.id
 WHERE p.id=?
 `,
 [providerId]
 );

 if(rows.length===0){
   throw new Error(
     "Doctor not found"
   );
 }

 const doctor = rows[0];

 await pool.query(
 `
 UPDATE users
 SET approval_status='APPROVED'
 WHERE id=?
 `,
 [doctor.user_id]
 );

 await pool.query(
 `
 UPDATE providers
 SET
 verification_status='APPROVED',
 is_verified=TRUE
 WHERE id=?
 `,
 [providerId]
 );

 await pool.query(
 `
 UPDATE provider_documents
 SET verification_status='APPROVED'
 WHERE provider_id=?
 `,
 [providerId]
 );

 await sendDoctorApprovalEmail(
   doctor.email
 );

 return {
   message:
   "Doctor approved successfully"
 };

};

export const rejectDoctorService =
async (
 providerId:string,
 reason:string
)=>{

 const [rows]:any =
 await pool.query(
 `
 SELECT
 p.*,
 u.email,
 u.id AS user_id
 FROM providers p
 JOIN users u
 ON p.user_id=u.id
 WHERE p.id=?
 `,
 [providerId]
 );

 if(rows.length===0){
   throw new Error(
     "Doctor not found"
   );
 }

 const doctor = rows[0];

 await pool.query(
 `
 UPDATE users
 SET approval_status='REJECTED'
 WHERE id=?
 `,
 [doctor.user_id]
 );

 await pool.query(
 `
 UPDATE providers
 SET
 verification_status='REJECTED',
 rejection_reason=?
 WHERE id=?
 `,
 [
   reason,
   providerId
 ]
 );

 await pool.query(
 `
 UPDATE provider_documents
 SET verification_status='REJECTED'
 WHERE provider_id=?
 `,
 [providerId]
 );

 await sendDoctorRejectEmail(
   doctor.email,
   reason
 );

 return {
   message:
   "Doctor rejected successfully"
 };

};

export const getDoctorDocumentService =
async(
 providerId:string
)=>{

 const [rows]:any =
 await pool.query(
 `
 SELECT *
 FROM provider_documents
 WHERE provider_id=?
 `,
 [providerId]
 );

 if(rows.length===0){
   throw new Error(
     "Document not found"
   );
 }

 return rows[0];
};