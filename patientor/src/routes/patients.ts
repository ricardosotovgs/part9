import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(patientService.getPatientView());
});

router.get('/', (_req, res) => {
    res.send('create patients');
});

export default router;