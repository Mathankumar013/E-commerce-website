const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./user");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Project", {
    useNewUrlParser: true
  })


app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3004, () => {
  console.log("SERVER RUNS PERFECTLY!");
});