const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');

const registerController = async (req, res) => {
  try {
    const data = req.body;

    const exisitingUser = await userModel.findOne({ email: req.body.email });
    if (exisitingUser) {
      return res
        .status(200)
        .send({ message: 'User already Exist', success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;
    const newUser = new userModel(data);

    await newUser.save();
    res.status(200).send({ message: 'Register Successfully', success: true });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Register Controller ${error.message}`,
    });
  }
};

const loginController = () => {};

module.exports = { registerController, loginController };
