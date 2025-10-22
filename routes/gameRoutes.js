import express from 'express'
const router = express.Router();
import Game from '../models/Game.js'

router.get('/', async (req, res) => {
    let data = await Game.find()
})