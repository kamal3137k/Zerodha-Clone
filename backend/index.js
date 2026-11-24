require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

main().catch((err) => {
  console.log(err);
});
async function main() {
  await mongoose.connect(url);
}

app.use(cors());
app.use(bodyParser.json());
// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "ICICIBANK",
//       qty: 8,
//       avg: 1100.0,
//       price: 1145.5,
//       net: "+4.14%",
//       day: "+1.35%",
//     },
//     {
//       name: "SBIN",
//       qty: 12,
//       avg: 750.0,
//       price: 785.25,
//       net: "+4.70%",
//       day: "+0.95%",
//     },
//     {
//       name: "WIPRO",
//       qty: 15,
//       avg: 520.0,
//       price: 498.75,
//       net: "-4.09%",
//       day: "-1.20%",
//     },
//     {
//       name: "BHARTIARTL",
//       qty: 6,
//       avg: 1450.0,
//       price: 1525.8,
//       net: "+5.23%",
//       day: "+2.15%",
//     },
//     {
//       name: "ITC",
//       qty: 20,
//       avg: 450.0,
//       price: 465.3,
//       net: "+3.40%",
//       day: "+0.75%",
//     },
//     {
//       name: "TATAMOTORS",
//       qty: 10,
//       avg: 950.0,
//       price: 925.6,
//       net: "-2.57%",
//       day: "-1.45%",
//     },
//     {
//       name: "AXISBANK",
//       qty: 7,
//       avg: 1050.0,
//       price: 1088.4,
//       net: "+3.66%",
//       day: "+1.10%",
//     },
//     {
//       name: "MARUTI",
//       qty: 2,
//       avg: 12000.0,
//       price: 12450.0,
//       net: "+3.75%",
//       day: "+0.85%",
//     },
//     {
//       name: "TATASTEEL",
//       qty: 25,
//       avg: 145.0,
//       price: 138.5,
//       net: "-4.48%",
//       day: "-1.80%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 5,
//       avg: 2400.0,
//       price: 2465.75,
//       net: "+2.74%",
//       day: "+0.65%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     const tempmodel = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     tempmodel.save();
//   });
//   res.send("done!");
// });

// app.get("/addPositons", async (req, res) => {
//   const tempPositions = [
//     {
//       product: "MIS",
//       name: "WIPRO",
//       qty: 15,
//       avg: 520.0,
//       price: 498.75,
//       net: "-4.09%",
//       day: "-1.20%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "SBIN",
//       qty: 12,
//       avg: 750.0,
//       price: 785.25,
//       net: "+4.70%",
//       day: "+0.95%",
//       isLoss: false,
//     },
//     {
//       product: "CNC",
//       name: "RELIANCE",
//       qty: 5,
//       avg: 1400.0,
//       price: 1450.75,
//       net: "+3.63%",
//       day: "+1.25%",
//       isLoss: false,
//     },
//     {
//       product: "MIS",
//       name: "TCS",
//       qty: 2,
//       avg: 3950.0,
//       price: 3890.5,
//       net: "-1.51%",
//       day: "-0.85%",
//       isLoss: true,
//     },
//     {
//       product: "MIS",
//       name: "INFY",
//       qty: 10,
//       avg: 1500.0,
//       price: 1555.45,
//       net: "+3.70%",
//       day: "+2.10%",
//       isLoss: false,
//     },
//     {
//       product: "CNC",
//       name: "HDFCBANK",
//       qty: 4,
//       avg: 1750.0,
//       price: 1725.3,
//       net: "-1.41%",
//       day: "-1.15%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((item) => {
//     const newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();

//   });
//   res.send("position data set");
// });

app.get("/allHoldings", async (req , res)=>{
  const allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
  
});

app.get("/allPositions", async (req , res)=>{
  const allPositions= await PositionsModel.find({});
    res.json(allPositions);
  
});

app.listen(PORT, () => {
  console.log("app is listening on port :3002");
});
