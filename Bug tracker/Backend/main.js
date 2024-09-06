require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.APP_PORT;
const database = process.env.DATABASE_URL;

// MongoDB connection
mongoose.connect(database).then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  const reportRoute = require("./routes/report.route");

  app.use("/api", reportRoute);
  app.listen(port, () => {
    console.log(`Application listening on http://localhost:${port}`);
  });
});
