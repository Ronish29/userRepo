const express = require('express');
const { signup, login } = require('../controllers/Auth');
const { updateProfile, getAllUserDetails } = require('../controllers/Profile');
const { auth } = require('../middlewares/Auth');
const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);

router.put("/updateProfile",auth,updateProfile);
router.get("/getUserDetails",auth,getAllUserDetails);

module.exports = router