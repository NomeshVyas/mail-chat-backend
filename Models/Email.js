import mongoose from "mongoose";

const EmailSchema = mongoose.Schema({
    to: {
        type: String,
        required: true,
        lowercase: true
    },
    from: {
        type: String,
        required: true,
        lowercase: true
    },
    subject: String,
    body: String,
    date: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    starred: {
        type: Boolean,
        required: true,
        default: false
    },
    bin: {
        type: Boolean,
        require: true,
        default: false
    },
    type: {
        type: String,
        required: true
    }
});

const Email = mongoose.model('emails', EmailSchema);
export default Email;