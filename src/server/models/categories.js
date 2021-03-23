import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Categories = new Schema({
    category: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

export default mongoose.model('Cat', Categories);