import { Request, Response } from "express";

import {
  getPatientProfile,
  updatePatientProfile,
  addEmergencyContact,
  addDependent,
   addInsurance,
   getPatientEncounters,
   getPatientLabs
} from "../services/patientService";

export const getProfile = async (
  req: Request,
  res: Response
) => {
  try {
    // Temporary hardcoded userId until Auth is ready
    const userId =
      "514d1305-6490-11f1-9bee-00ff4031b653";

    const patient = await getPatientProfile(userId);

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response
) => {
  try {
    // Temporary hardcoded userId until Auth is ready
    const userId =
      "514d1305-6490-11f1-9bee-00ff4031b653";

    const { phone, email, photo_url } = req.body;

    await updatePatientProfile(
      userId,
      phone,
      email,
      photo_url
    );

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
export const createEmergencyContact = async (
  req: Request,
  res: Response
) => {
  try {
    const patient = await getPatientProfile(
      "514d1305-6490-11f1-9bee-00ff4031b653"
    );

    const {
      name,
      relationship,
      phone
    } = req.body;

    await addEmergencyContact(
      patient.id,
      name,
      relationship,
      phone
    );

    return res.status(201).json({
      success: true,
      message: "Emergency contact added successfully"
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
export const createDependent = async (
  req: Request,
  res: Response
) => {
  try {
    const patient = await getPatientProfile(
      "514d1305-6490-11f1-9bee-00ff4031b653"
    );

    const {
      first_name,
      last_name,
      dob,
      relationship,
      proxy_consent
    } = req.body;

    await addDependent(
      patient.id,
      first_name,
      last_name,
      dob,
      relationship,
      proxy_consent
    );

    return res.status(201).json({
      success: true,
      message: "Dependent added successfully"
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
export const createInsurance = async (
  req: Request,
  res: Response
) => {
  try {
    const patient = await getPatientProfile(
      "514d1305-6490-11f1-9bee-00ff4031b653"
    );

    const {
      payer,
      member_id,
      group_no,
      valid_from,
      valid_to
    } = req.body;

    await addInsurance(
      patient.id,
      payer,
      member_id,
      group_no,
      valid_from,
      valid_to
    );

    return res.status(201).json({
      success: true,
      message: "Insurance added successfully"
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
export const getEncounters = async (
  req: Request,
  res: Response
) => {
  try {
    const patient = await getPatientProfile(
      "514d1305-6490-11f1-9bee-00ff4031b653"
    );

    const encounters =
      await getPatientEncounters(patient.id);

    return res.status(200).json({
      success: true,
      data: encounters
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
export const getLabs = async (
  req: Request,
  res: Response
) => {
  try {
    const patient = await getPatientProfile(
      "514d1305-6490-11f1-9bee-00ff4031b653"
    );

    const labs = await getPatientLabs(
      patient.id
    );

    return res.status(200).json({
      success: true,
      data: labs
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};