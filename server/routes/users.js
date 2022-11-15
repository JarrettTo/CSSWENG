import express from 'express';
import {signUp,signIn} from '../controllers/users.js';
const router= express.Router();

router.post('/signin', signIn);     //u need to post if ur submitting data to the backend
router.post('/signup', signUp);     //u need to post if ur submitting data to the backend

export default router;