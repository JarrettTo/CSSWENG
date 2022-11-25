import express from 'express';
import {getTxn, getTxns} from '../controllers/transactions.js';
import auth from '../middleware/auth.js';
const router= express.Router();

router.get('/', auth, getTxns);     //u need to post if ur submitting data to the backend
router.post('/:id', auth, getTxn);     //u need to post if ur submitting data to the backend

export default router;