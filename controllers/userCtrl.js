const userModel = require('../models/userModels');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

const loginController = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: 'User not found', success: false });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .send({ message: 'Invalid Email or Password', success: false });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).send({message: "Login Success", success: true, token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: `Error in Login Controller: ${error.message}` });
  }
};

module.exports = { loginController };


module.exports = { registerController, loginController };
