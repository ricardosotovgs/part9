import diagnosisData from '../../data/diagnoses.json';

import { Diagnosis } from '../types';

const diagnoses: Diagnosis[] = diagnosisData as Diagnosis[];

const getDiagnoses = (): Diagnosis[] => {
    return diagnoses;
};

const addDiagnosis = () => {
    return null;
};

export default { getDiagnoses, addDiagnosis };