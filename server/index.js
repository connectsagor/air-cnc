const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.SECRET_PAYMENT);
mongoose.connect(process.env.URI);

const HotelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  cost: String,
  review: String,
  img: String,
});

const Hotel = mongoose.model("Hotel", HotelSchema);

// app.post("/addHotel", async (req, res) => {
//   const data = req.body;
//   await Hotel.create(data);

//   res.send("Hello World!");
// });

app.get("/get-hotels", async (req, res) => {
  const hotelData = await Hotel.find({});
  res.status(200).json({
    message: "success",
    data: hotelData,
  });
});

app.get("/hotels", async (req, res) => {
  const hotelData = await Hotel.find({}).limit(3);
  res.status(200).json({
    message: "success",
    data: hotelData,
  });
});

app.get("/selected-hotels", async (req, res) => {
  const hotelData = await Hotel.find({}).limit(1);
  res.status(200).json({
    message: "success",
    data: hotelData,
  });
});

app.listen(port);
