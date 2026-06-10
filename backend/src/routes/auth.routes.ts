import { Router } from "express";

import {
  registerPatient,
  registerDoctor,
  verifyDoctorOTP,
  verifyOTP,
  login
} from "../controllers/auth.controller";
import { upload } from "../middleware/uploadMiddleware";

const router = Router();

router.post("/register/patient",registerPatient);

router.post("/verify-otp",verifyOTP);

router.post("/login",login);

router.post("/register/doctor",upload.single("doctorIdCard"),registerDoctor);

router.post("/verify-doctor-otp",verifyDoctorOTP);

export default router;