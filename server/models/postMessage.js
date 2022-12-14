/*@brief: Database scehma for show posts
 * @author: Justin To and Daniel Capinpin
 */
import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  //schema for shows
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
  noOfAttendees: { type: Number, default: 0 },
  maxAttendees: Number,
  selectedFile: String,
  selectedFileOther: String,
  status: { type: String, default: "Open" },
  registeredUsers: { type: [String], default: [] },
  acceptedUsers: { type: [String], default: [] },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
