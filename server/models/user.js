import mongoose from 'mongoose';

const userSchema = mongoose.Schema({ //schema for shows
    id: {type: String, required: true},
    password: {type: String, required: true},
    dlsu: {type: Boolean, required: true},
    claimed: {type: Boolean, required: true},
    registeredShows: {type: [String], required: true},
    acceptedShows: {type: [String], default: []},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    admin: {type: Boolean, required: true},
    email: {type: String, required: true},

});

const user = mongoose.model('user', userSchema);
export default user;