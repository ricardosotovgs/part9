import patientData from "../../data/patients.json";
import { v4 as uuidv4 } from 'uuid';
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

const addPatient = (patient: Patient): Patient => {
  const newPatient = {
    ...patient,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    id: uuidv4(),
  };

  patients.push(newPatient);
  return newPatient;
};

export default { getPatients, getPatientView, addPatient };
