import express from "express";

import {
  getProfile,
  updateProfile,
  createEmergencyContact,
  createDependent,
  createInsurance,
  getEncounters,
  getLabs
} from "../controllers/patientController";

const router = express.Router();

router.get("/me", getProfile);

router.patch("/me", updateProfile);

router.post(
  "/me/emergency-contacts",
  createEmergencyContact
);
router.post(
  "/me/dependents",
  createDependent
);
router.post(
  "/me/insurance",
  createInsurance
);
router.get(
  "/me/encounters",
  getEncounters
);
router.get(
  "/me/labs",
  getLabs
);
export default router;