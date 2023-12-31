const express = require('express');
const { loginController, registerController, authController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

// router object
const router = express.Router();

// routes
// Login || POST 
router.post('/login', loginController);

// Register||POST 
router.post('/register', registerController);


// Authenticate || POST
router.post('/getUserData', authMiddleware, authController);



module.exports = router;