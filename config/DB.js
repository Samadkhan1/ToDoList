import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to database");
  } catch (error) {
    console.log("error connecting to database:" + error);
  }
}

export default connection;
