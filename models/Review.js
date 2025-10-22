import mongoose from 'mongoose'

const ReviewSchema = new mongoose.Schema({
    game: {type: String,
    required: true
    },
    rating: {type: Number, min: 1, max: 10, required: true}, //rating out of 10.
    comment: {type: String,
              required: true
    }
})

export default ReviewSchema;