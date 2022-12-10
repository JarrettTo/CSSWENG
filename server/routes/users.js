/*@brief: Controller for the different routes related to user authentication and registration
* @author: Justin To and Daniel Capinpin
*/

import express from 'express';
import {signUp,signIn, googleSign, updateUser} from '../controllers/users.js';
const router= express.Router();




router.post('/signin', signIn);     //post data to the route
router.post('/signup', signUp);     
router.post('/googlesign', googleSign);
router.post('/:id/update', updateUser)
export default router;