import model from "../models/userModel.js";

const getController = async (req, res) => {
  
  try {
      const result = await model.find();
    res.status(200).json({
      success: true,
      data: result, // Array of todos with name/id
    });
    console.log("request")
    
    
  } catch (error) {
    console.log(error)
  }
};

export default getController;
