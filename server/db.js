const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://dummyuser:dummyuser@cluster0.bc4yoen.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = () => {
  mongoose
    .connect(mongoURI, {})
    .then(async () => {
      console.log("Connected to mongodb atlas");
        const fetchedData = await mongoose.connection.db.collection("food_category");
        const allData = await fetchedData.find({}).toArray();
        console.log(allData);
    })
    .catch((err) => {
      console.log("Error connecting mongodb atlas", err);
    });
};


module.exports = mongoDB;


