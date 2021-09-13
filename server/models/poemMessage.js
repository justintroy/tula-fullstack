import mongoose from "mongoose";

const poemSchema = mongoose.Schema({
    title: String,
    body: String,
    name: String,
    creator: String,
    tags: [String],
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const PoemMessage = mongoose.model('PoemMessage', poemSchema)

export default PoemMessage;