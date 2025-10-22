import mongoose from 'mongoose'
import Game from '../models/Game.js'
import Developer from '../models/Developer.js'
import Review from '../models.Developer.js'

async function populate() {
  await mongoose.connect("mongodb://localhost:3000/gameProjectsDB");

  await Game.deleteMany({});
  await Developer.deleteMany({});
  await Review.deleteMany({});

  const dev1 = await Developer.create({ name: "Tafari Game Studios", founded: 2022 });
  const dev2 = await Developer.create({ name: "Good Game Studios", founded: 2020});

  const game1 = await Game.create({ title: "Kill Ball", genre: "Arena_Shooter", developer: dev1._id });
  const game2 = await Game.create({ title: "Mystic Valley", genre: "RPG", developer: dev2._id });

  await Review.create({ game: game1._id, rating: 5, comment: "Epic game!" });
  await Review.create({ game: game2._id, rating: 4, comment: "Peaceful and beautiful." });

  console.log("Data added.");
  mongoose.connection.close();
}

populate();
