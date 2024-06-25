import patientData from "../../data/patients.json";

import { Patient, PatientView } from "../types";

const patients: Patient[] = patientData as Patient[];

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientView = (): PatientView[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = () => {
  return null;
};

export default { getPatients, getPatientView, addPatient };
