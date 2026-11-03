const express = require('express');
const router = express.Router();
const {login}=require("../controller/authController.js");
router.post('/login',login);
router.post('/register',userRegister);
//router.get('/dashboard',userDashboard);
router.post('./logout',userLogout);

module.eports = router