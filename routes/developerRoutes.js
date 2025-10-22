import express from 'express';
const router = express.Router();
import Developer from '../models/Developer.js'

router.get('/', async (req, res) => {
    try {
        const developers = await Developer.find();
        res.json(developers);
    } catch (err) {
        console.log("Failed to fetch Developers, Error: ", err)
    }
})

router.post("/", async (req, res) => {
    try{
        let addDev = await Developer.create(req.body);
        res.json(newDev);
    } catch (err) {
        console.log("Failed to add new data: ", err)
    }
})

router.patch("/:id", async (req, res) => {
    try{
        let updatedevData = await Developer.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updated);
        console.log("Data successfully updated.")
    } catch (err) {
        console.log(err)
    }

})

router.delete("/:id", async (req, res) => {
    try {
        await Developer.findByIdAndDelete(req.params.id);
        console.log("Developer data Succesfully deleted.")
    } catch (err) {
        console.log(err)
    }
})

export default router