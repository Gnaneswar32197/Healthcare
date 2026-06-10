// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendOTPEmail = async (
//   email: string,
//   otp: string
// ) => {
//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "Healthcare Portal OTP Verification",
//     html: `
//       <h2>Email Verification</h2>
//       <p>Your OTP is:</p>
//       <h1>${otp}</h1>
//       <p>Valid for 10 minutes.</p>
//     `,
//   });
// };

// export default transporter;

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendOTPEmail = async (
  email: string,
  otp: string
) => {

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Healthcare Portal OTP",
    html: `
      <h2>Email Verification</h2>
      <h1>${otp}</h1>
      <p>Valid for 10 minutes</p>
    `
  });

};

export const sendDoctorApprovalEmail =
async(email:string)=>{

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject:"Doctor Account Approved",
    html:`
      <h2>Congratulations</h2>
      <p>
      Your doctor account has been approved.
      You can now login.
      </p>
    `
  });

};

export const sendDoctorRejectEmail =
async(
  email:string,
  reason:string
)=>{

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject:"Doctor Account Rejected",
    html:`
      <h2>Application Rejected</h2>

      <p>
      Reason:
      ${reason}
      </p>
    `
  });

};