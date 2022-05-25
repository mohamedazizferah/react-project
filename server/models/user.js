const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userName: String,
  password: String,
  avatar: { data: Buffer, contentType: String },
  favorites: [{ id: String }],
});

module.exports = mongoose.model("user", schema);
