const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const user = require("./models/user");
const movie = require("./models/movie");
app.use(cors());
app.use(express.json());

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

app.post("/user", async (req, res) => {
  const userCreated = await user.create(req.body);
  res.status(200).json(userCreated);
});

app.get("/user", async (req, res) => {
  const users = await user.find();
  res.status(200).json(users);
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const users = await user.findById(id);
  res.status(200).json(users);
});

app.patch("/user/:id", async (req, res) => {
  const id = req.params.id;
  const userUpdated = await user.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(userUpdated);
});

app.delete("/user/:id", async (req, res) => {
  const id = req.params.id;
  const userdeleted = await user.findByIdAndDelete(id);
  res.status(200).json(userdeleted);
});

app.patch("/user/avatar/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;
  const userUpdated = await user.findByIdAndUpdate(id, req.body, {
    avatar: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  });
  res.status(200).json(userUpdated);
});

app.post("/movie", async (req, res) => {
  const movieCreated = await movie.create(req.body);
  res.status(200).json(movieCreated);
});

app.get("/movie", async (req, res) => {
  const movies = await movie.find();
  res.status(200).json(movies);
});

app.delete("/movie/:id", async (req, res) => {
  const id = req.params.id;
  const moviedeleted = await movie.findByIdAndDelete(id);
  res.status(200).json(moviedeleted);
});

module.exports = app;
