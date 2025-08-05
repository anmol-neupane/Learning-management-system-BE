import mongoose from "mongoose";
import { config } from "./config.js";

const mongoConnection = () => {
  console.log(process.env.MONGO_URL);
  return mongoose.connect(config.mongoOptions.url);
};

export default mongoConnection;
