import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Check if MONGODB_URL already contains the database name
    const mongoUrl = process.env.MONGODB_URL;
    const connectionUrl = mongoUrl.includes(DB_NAME) 
      ? mongoUrl 
      : `${mongoUrl}/${DB_NAME}`;
    
    const connectionInstance = await mongoose.connect(connectionUrl);
    console.log(
      `\n MongoDB connect !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
