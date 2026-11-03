const express = require('express');
const router = express.Router();

router.post('/login',userLogin);
router.post('/register',userRegister);
router.post('./logout',userLogout);

module.eports = router