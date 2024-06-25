export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export type PatientView = Omit<Patient, "ssn">;

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string;
}