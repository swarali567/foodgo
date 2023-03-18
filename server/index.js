const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const mongoDB = require("./db");
const { default: mongoose } = require("mongoose");
mongoDB();
app.use(express.json());
app.use(cors());
app.get("/food", async (req, res) => {
  const fetchedData = await mongoose.connection.db.collection("food_category");
  const allData = await fetchedData.find({}).toArray();
  res.json({ data: allData });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



