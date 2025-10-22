import express from 'express'
const router = express.Router();
import Review from '../models/Review.js'

router.get("/", async (req, res) => {
    try{
        let data = await Review.find().populate("game");
        res.json(data);
        console.log("Data succesfully requested.")
    } catch (err){
        console.log(err)
    }
  
});

router.post("/", async (req, res) => {
    try{
        let newReview = await Review.create(req.body);
        res.json(newReview);
        console.log("Data succesfully posted.")
    } catch (err){
        console.log(err)
    }


});

router.patch("/:id", async (req, res) => {
    try{
        let updated = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
        console.log("Data successfully updated.")
    } catch (err){
        console.log(err)
    }
});

router.delete("/:id", async (req, res) => {
    try{
        await Review.findByIdAndDelete(req.params.id);
        console.log("Data succesfully deleted.")
    } catch (err){
        console.log(err)
    }

});

export default router;
