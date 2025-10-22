import mongoose from 'mongoose';

async function connectDB(uri = process.env.MONGO_URI) {
    try {
        await mongoose.connect(uri)
        console.log("Successfully connected to mongoose.")
    } catch (err) {
        console.log("Failed to connect:", err);
    }
}

export default connectDB;