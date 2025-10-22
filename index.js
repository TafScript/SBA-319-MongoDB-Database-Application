import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import connectDB from './db.js';
import devRoutes from './routes/developerRoutes.js'
import gameRoutes from './routes/gameRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
app.use(express.json());

connectDB(process.env.MONGO_URI);


app.get('/', (req, res) => {
    res.send("Game Projects API");
})

app.use('/developers', devRoutes);
app.use('/games', gameRoutes);
app.use('/reviews', reviewRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));