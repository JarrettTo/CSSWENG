import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ //schema for shows
    title: String,
    date: String,
    price: String,
    description: String,
    creator: String,
    tags: String,
    id: String,
    noOfAttendees: String,
    maxAttendees: String,
    selectedFile: String,
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;