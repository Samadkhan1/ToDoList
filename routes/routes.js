import express from "express"
import postController from "../controllers/postController.js"
import deleteController from "../controllers/deleteController.js"
import getController from "../controllers/getController.js"

const Router = express.Router()

Router.post("/", postController);
Router.delete("/:id", deleteController);
Router.get("/", getController);

export default Router