/*@brief: Controller for the different routes related to the reading, writing, updating and deletion of attendance logs
* @author: Justin To and Daniel Capinpin
*/

import express from 'express';
import {logTime, getLogs, getAttBySearch} from '../controllers/attendance.js';

const router= express.Router();

router.post('/log', logTime);
router.get('/', getLogs);
router.get('/attsrch', getAttBySearch)

export default router;