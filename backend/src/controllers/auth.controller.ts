import {
  registerPatientService,
  registerDoctorService,
 verifyDoctorOTPService,
  verifyOTPService,
  loginService
} from "../services/auth.service";

export const registerPatient =
async (req:any,res:any) => {

  try {

    const result =
      await registerPatientService(
        req.body
      );

    return res.status(200).json({
      success:true,
      message:
      "OTP sent",
      data: result
    });

  } catch(error:any) {

    return res.status(400).json({
      message:error.message
    });

  }
};

export const verifyOTP =
async (req:any,res:any) => {

  try {

    const { email, otp } = req.body;

    const result =
      await verifyOTPService(
        email,
        otp
      );

    return res.status(200).json({
      success:true,
      data:result
    });

  } catch(error:any) {

    return res.status(400).json({
      message:error.message
    });

  }
};

export const login =
async(req:any,res:any)=>{

  try{

    const {
      email,
      password
    } = req.body;

    const result =
      await loginService(
        email,
        password
      );

    return res.json(result);

  }catch(error:any){

    return res.status(400).json({
      message:error.message
    });

  }
};

export const registerDoctor =
async(req:any,res:any)=>{

 try{

   const result =
   await registerDoctorService(
     req.body,
     req.file
   );

   return res.status(200).json({
     success:true,
     message:"OTP sent",
     data:result
   });

 }catch(error:any){

   return res.status(400).json({
     message:error.message
   });

 }

};

export const verifyDoctorOTP =
async(req:any,res:any)=>{

 try{

   const {
     email,
     otp
   } = req.body;

   const result =
   await verifyDoctorOTPService(
     email,
     otp
   );

   return res.status(200).json({
     success:true,
     data:result
   });

 }catch(error:any){

   return res.status(400).json({
     message:error.message
   });

 }

};