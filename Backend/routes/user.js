const express = require('express');
const router = express.Router();
const {login}=require("../controller/authController.js");
const {jwtUserMiddleware}=require("../Middleware/jwtMiddleware.js");
router.post('/login',login);
router.post('/register',userRegister);
//router.get('/dashboard',userDashboard);
router.post('/logout',userLogout);

router.post("/bookItem/:id",jwtUserMiddleware,bookItem);

module.exports = router