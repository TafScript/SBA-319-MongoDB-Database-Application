import mongoose from 'mongoose';

const DeveloperSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    founded: {
        type: Number, //year
        required: true
    }
})

export default DeveloperSchema;
