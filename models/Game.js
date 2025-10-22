import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: String,
  developer: {
    type: String,
    required: true
  }
});

// Create the model
const Game = mongoose.model('Game', gameSchema);

export default Game;
