import express from 'express';
import {logTime, getLogs} from '../controllers/attendance.js';
import auth from '../middleware/auth.js';
const router= express.Router();

router.post('/log', logTime);
router.get('/', getLogs);

export default router;