import mongoose from "mongoose"

const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: { type: String },
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, {
    collection: "postmessages"
})


const PostModel = mongoose.model("postmessages", PostSchema)


export default PostModel