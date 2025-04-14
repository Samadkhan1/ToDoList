import model from "../models/userModel.js";

const deleteController = async (req, res) => {
  const {id} = req.params
  try {
    console.log(id)
    if (!id) {
      return res.status(400).json({ message: "id is required!" });
    }
    const deletetodo = await model.findByIdAndDelete(id)
    if (deletetodo.deletedCount === 0) {
      res.status(404).json({ message: "error deleting item" });
    }
    res.status(200).json({
      message: "data deleted successfuly",
    });
  } catch (error) {
    console.log("error deleting  item:" + error);
    res.status(500).json({ error: "failed to delete data" });
  }
};

export default deleteController