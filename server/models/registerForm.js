import mongoose from 'mongoose';

const formSchema = mongoose.Schema({ //schema for shows
    userID: {type: String, required: true},
    postID: {type: String, required: true},
    selectedFile: {type: String, default: null},
    artPass: {type: Boolean, default: false},
    status: {type: String, required: true, default: 'Pending'},
    date:   {type: Date, required: true},

});

const form = mongoose.model('form', formSchema);
export default form;