/*@brief: Database schema for attendance logs
* @author: Justin To and Daniel Capinpin
*/
import mongoose from 'mongoose';

const attendanceSchema = mongoose.Schema({ //schema for shows
    
    userID: { type: String, default: "" },
    postID: { type: String, default: "" },
    txnID: { type: String, default: "" },
    userName: { type: String, default: "" },
    postName: { type: String, default: "" },
    email: { type: String, default: "" },
    timeIn: { type: Date, default: null },
    timeOut: { type: Date, default: null },
    
    
});

const attendanceLog = mongoose.model('attendanceLog', attendanceSchema);
export default attendanceLog;