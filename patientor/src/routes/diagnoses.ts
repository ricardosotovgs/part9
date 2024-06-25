import express from 'express';
import diagnosisService from '../services/diagnosisService';
const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diagnosisService.getDiagnoses());
});

router.get('/', (_req, res) => {
    res.send('create diagnoses');
});

export default router;