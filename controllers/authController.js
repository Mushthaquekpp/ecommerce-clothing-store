import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelpers.js";
export const regController = async (req, res) => {
 
  try {
    const { name, email, password, phone, address, answer } = req.body; //data passed to body
    if (!name) {
      return res.send({ error: "name is required" }); //checking validation
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    if (!phone) {
      return res.send({ error: "phone number is required" });
    }
    if (!address) {
      return res.send({ error: "address field is required" });
    }
    if (!answer) {
      return res.send({ error: "answer field is required" });
    }

    const existUser = await userModel.findone({ email }); //checking if the data is registered earlier
    if (existUser) {
      return res.send({ message: "Email is already registered" });
    }

    const hpassword = await hashPassword(password); //calling the hashpassword function
    const user = await new userModel({
      name,
      email,
      password: hpassword,
      phone,
      address,
      answer,
    }).save();
    res.status(201).send({ success: true, message: "registered success" ,user,}); //saving the entered data and hashing the password
  } catch (error) {
    res.status(500).send({ success: false, message: "error" });
    console.log(error);
  }
};
