import express from "express";
import model from "./models/userModel.js";
import connection from "./config/DB.js";
import Router from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

//mongoose connection
connection();

const app = express();
app.use(cors())
app.use(express.json());

app.use("/",Router)

//starting the server
app.listen(process.env.PORT, () => {
  console.log("server started");
});
