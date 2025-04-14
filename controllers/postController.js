import model from "../models/userModel.js";

const postController = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ message: "name is required!" });
    }
    console.log(name);
    const result = model.create({ name });
    res.status(200).json({
      message: "data added successfuly",
    });
  } catch (error) {
    console.log("error adding new item:" + error);
    res.status(400).json({ error: "failed to add data" });
  }
};

export default postController