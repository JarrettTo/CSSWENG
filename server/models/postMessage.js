import mongoose from 'mongoose';

const postSchema = mongoose.Schema({        //schema for shows
    title: String,
    date: Date,
    price: Number,
    description: String,
    creator: String,
    tags: [String],
    id: Number,
    noOfAttendees: Number
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;