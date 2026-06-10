import pool from "../config/db";

export const getPatientProfile = async (
  userId: string
) => {
  const [rows]: any = await pool.query(
    `
    SELECT *
    FROM patients
    WHERE user_id = ?
    `,
    [userId]
  );

  return rows[0];
};

export const updatePatientProfile = async (
  userId: string,
  phone: string,
  email: string,
  photoUrl: string
) => {
  await pool.query(
    `
    UPDATE patients
    SET
      phone = ?,
      email = ?,
      photo_url = ?
    WHERE user_id = ?
    `,
    [phone, email, photoUrl, userId]
  );
};

export const addEmergencyContact = async (
  patientId: string,
  name: string,
  relationship: string,
  phone: string
) => {
  await pool.query(
    `
    INSERT INTO emergency_contacts (
      patient_id,
      name,
      relationship,
      phone
    )
    VALUES (?, ?, ?, ?)
    `,
    [patientId, name, relationship, phone]
  );
};
export const addDependent = async (
  patientId: string,
  firstName: string,
  lastName: string,
  dob: string,
  relationship: string,
  proxyConsent: boolean
) => {
  await pool.query(
    `
    INSERT INTO patient_dependents (
      patient_id,
      first_name,
      last_name,
      dob,
      relationship,
      proxy_consent
    )
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      patientId,
      firstName,
      lastName,
      dob,
      relationship,
      proxyConsent
    ]
  );
};
export const addInsurance = async (
  patientId: string,
  payer: string,
  memberId: string,
  groupNo: string,
  validFrom: string,
  validTo: string
) => {
  await pool.query(
    `
    INSERT INTO insurance (
      patient_id,
      payer,
      member_id,
      group_no,
      valid_from,
      valid_to
    )
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      patientId,
      payer,
      memberId,
      groupNo,
      validFrom,
      validTo
    ]
  );
};
export const getPatientEncounters = async (
  patientId: string
) => {
  const [rows]: any = await pool.query(
    `
    SELECT *
    FROM encounters
    WHERE patient_id = ?
    ORDER BY started_at DESC
    `,
    [patientId]
  );

  return rows;
};
export const getPatientLabs = async (
  patientId: string
) => {
  const [rows]: any = await pool.query(
    `
    SELECT
      lo.id AS lab_order_id,
      lo.status,
      lo.ordered_at,
      lr.test,
      lr.value,
      lr.unit,
      lr.reference_range,
      lr.flag,
      lr.observed_at
    FROM lab_orders lo
    LEFT JOIN lab_results lr
      ON lo.id = lr.lab_order_id
    WHERE lo.patient_id = ?
    ORDER BY lo.ordered_at DESC
    `,
    [patientId]
  );

  return rows;
};