import { Request, Response } from "express";

import {
  getPendingDoctorsService,
  getDoctorByIdService,
  approveDoctorService,
  rejectDoctorService,
  getDoctorDocumentService
} from "../services/adminService";

/*
GET ALL PENDING DOCTORS
GET /api/admin/doctors/pending
*/
export const getPendingDoctors = async (
  req: Request,
  res: Response
) => {
  try {

    const doctors =
      await getPendingDoctorsService();

    return res.status(200).json({
      success: true,
      count: doctors.length,
      data: doctors
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

/*
GET DOCTOR DETAILS
GET /api/admin/doctors/:id
*/
export const getDoctorById = async (
  req: Request,
  res: Response
) => {
  try {

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Doctor id is required"
      });
    }

    const doctor = await getDoctorByIdService(id);

    return res.status(200).json({
      success: true,
      data: doctor
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

/*
APPROVE DOCTOR
PATCH /api/admin/doctors/:id/approve
*/
export const approveDoctor = async (
  req: Request,
  res: Response
) => {
  try {

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Doctor id is required"
      });
    }

    const result = await approveDoctorService(id);

    return res.status(200).json({
      success: true,
      message:
        "Doctor approved successfully",
      data: result
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

/*
REJECT DOCTOR
PATCH /api/admin/doctors/:id/reject
*/
export const rejectDoctor = async (
  req: Request,
  res: Response
) => {
  try {

    const { reason } = req.body;

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Doctor id is required"
      });
    }

    if (!reason) {
      return res.status(400).json({
        success: false,
        message:
          "Rejection reason is required"
      });
    }

    const result = await rejectDoctorService(id, reason);

    return res.status(200).json({
      success: true,
      message:
        "Doctor rejected successfully",
      data: result
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

/*
VIEW DOCTOR DOCUMENT
GET /api/admin/doctors/:id/document
*/
export const getDoctorDocument = async (
  req: Request,
  res: Response
) => {
  try {

    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Doctor id is required"
      });
    }

    const document = await getDoctorDocumentService(id);

    res.setHeader(
      "Content-Type",
      document.mime_type
    );

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${document.file_name}"`
    );

    return res.send(
      document.file_data
    );

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};