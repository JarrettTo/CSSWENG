import express from 'express';
import {getTxn, getTxns} from '../controllers/transactions.js';
const router= express.Router();

router.get('/', getTxns);     //u need to post if ur submitting data to the backend
router.post('/:id', getTxn);     //u need to post if ur submitting data to the backend

export default router;