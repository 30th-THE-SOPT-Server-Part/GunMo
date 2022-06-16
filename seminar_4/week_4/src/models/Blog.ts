import mongoose from "mongoose";
import { BlogInfo } from "../interfaces/blog/BlogInfo";

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: Text,
        required:true,
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

export default mongoose.model<BlogInfo&mongoose.Document>("Blog", BlogSchema);