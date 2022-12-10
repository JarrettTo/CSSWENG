/*@brief: database schema for users' registration forms for shows
* @author: Justin To and Daniel Capinpin
*/
import mongoose from 'mongoose';

const formSchema = mongoose.Schema({ //schema for shows
    userID: {type: String, required: true},
    postID: {type: String, required: true},
    postName: {type: String, required: true},
    selectedFile: {type: String, default: null},
    artPass: {type: Boolean, default: false},
    status: {type: String, required: true, default: 'Pending'},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dlsu_id: {type: String, default: null},
    college:{type: String, default: null},
    degree:{type: String, default: null},
    altClass:{type: String, default: null},
    contactNumber: {type: String, default: null},
    date:   {type: Date, required: true},
    email: {type: String, default: null},

});

const form = mongoose.model('form', formSchema);
export default form;