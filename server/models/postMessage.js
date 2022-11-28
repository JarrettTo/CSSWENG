import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ //schema for shows
    title: String,
    date: Date,
    endDate: Date,
    price: Number,
    description: String,
    creator: String,
    tags: [String],
    id: String,
    noOfAttendees: Number,
    maxAttendees: Number,
    selectedFile: String,
    registeredUsers: { type: [String], default: [] },
    acceptedUsers: { type: [String], default: [] },
    activeDate: Date,
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;