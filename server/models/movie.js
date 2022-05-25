const mongoose = require("mongoose");

const schema = mongoose.Schema({
  banner: String,
  poster: String,
  title: String,
  rating: String,
  year: String,
  duration: String,
  quality: String,
  description: String,
  type: String,
  seasons: Number,
  episodes: Number,
  genre: [String],
});

module.exports = mongoose.model("movie", schema);
