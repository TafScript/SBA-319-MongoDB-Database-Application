import express from 'express';
const router = express.Router();
import Developer from '../models/Developer.js'

router.get('/', async (req, res) => {
    try {
        const developers = await Developer.find();
        res.json(developers);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch developers" });
    }
})