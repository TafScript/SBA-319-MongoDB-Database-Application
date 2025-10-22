import express from 'express'
const router = express.Router();
import Game from '../models/Game.js'

router.get('/', async (req, res) => {
    try{
        const gameData = await Game.find()
        res.json(gameData)
    } catch (err) {
        console.log(err)
    }
})

router.post("/", async (req, res) => {
    try{
        let newGameData = await Game.create(req.body);
        res.json(newGame);
    } catch (err) {
        console.log(err)
    }
})

router.patch("/:id", async (req, res) => {
    try{
        let updatedGameData = await Game.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
        console.log("Data successfully updated.")
    } catch (err) {
        console.log(err)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        await Game.findByIdAndDelete(req.params.id)
        console.log("Data successfully deleted.")
    } catch (err) {
        console.log(err)
    }
})


export default router;