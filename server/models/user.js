import mongoose from 'mongoose';

const userSchema = mongoose.Schema({ //schema for shows
    id: String,
    password: String,
    holder: Boolean,
    claimed: Boolean,
    registeredShows: [Number],
    firstName: String,
    lastName: String,
    college: String

});

const userMessage = mongoose.model('userMessage', userSchema);
export default userMessage;