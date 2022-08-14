const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfully!"))
  .catch((err) => console.log(err));

app.use("/api/user", userRoute);

app.listen(process.env.PORT || 6000, () =>
  console.log(`Backend server is running on port ${process.env.PORT}`)
);
