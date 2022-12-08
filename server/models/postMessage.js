import mongoose from 'mongoose';

const postSchema = mongoose.Schema({ //schema for shows
    title: String,
    date: Date,
    endDate: Date,
    expiryDate: Date,
    price: Number,
    description: String,
    venue: String,
    creator: String,
    tags: [String],
    id: String,
    noOfAttendees: Number,
    maxAttendees: Number,
    selectedFile: String,
    selectedFileOther: String,
    registeredUsers: { type: [String], default: [] },
    acceptedUsers: { type: [String], default: [] },
    
});

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;