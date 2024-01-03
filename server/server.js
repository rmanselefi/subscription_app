import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

// db

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route

readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

// port

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
