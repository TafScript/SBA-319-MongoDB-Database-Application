import dotenv from "dotenv/config";
import express from 'express';
import connectDB from './db.js';
import devRoutes from './routes/developerRoutes.js'
import gameRoutes from './routes/gameRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
app.use(express.json());

connectDB(process.env.MONGO_URI);


app.listen(prompt, () => console.log("Server running on Port: ", PORT));