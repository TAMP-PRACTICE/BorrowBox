const express = require('express');
const { registerListings } = require('../controller/ownerController');
const {jwtUserMiddleware}=require("../Middlewares/jwtMiddleware.js");
const router = express.Router();



// router.post('/login',ownerLogin);
// router.post('/register',ownerRegister);
// router.post('./logout',ownerLogout);

router.post('/registerItem',jwtUserMiddleware,registerListings);

module.eports = router;