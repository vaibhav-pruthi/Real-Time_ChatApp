import mongoose from "mongoose";
import User from "./user.model.js";
import Message from "./message.model.js";
const conversationSchema = new mongoose.Schema({
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Message
    }]
},{timestamps:true});
const Conversation = mongoose.model('conversation',conversationSchema);
export default Conversation;
