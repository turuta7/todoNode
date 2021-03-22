import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Task = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
    },
    actualDate: {
        type: Date,
        default: new Date()
    }
}, {timestamps: true});

export default mongoose.model('tasks', Task);