import mongoose from 'mongoose';

const DeveloperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

export default DeveloperSchema;
