import { Router } from "express";

import {
  getPendingDoctors,
  getDoctorById,
  approveDoctor,
  rejectDoctor,
  getDoctorDocument
} from "../controllers/adminController";

const router = Router();

router.get(
  "/doctors/pending",
  getPendingDoctors
);

router.get(
  "/doctors/:id",
  getDoctorById
);

router.get(
  "/doctors/:id/document",
  getDoctorDocument
);

router.patch(
  "/doctors/:id/approve",
  approveDoctor
);

router.patch(
  "/doctors/:id/reject",
  rejectDoctor
);

export default router;