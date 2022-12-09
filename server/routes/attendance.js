import express from 'express';
import {logTime, getLogs, getAttBySearch} from '../controllers/attendance.js';
import auth from '../middleware/auth.js';
const router= express.Router();

router.post('/log', logTime);
router.get('/', getLogs);
router.get('/attsrch', getAttBySearch)

export default router;