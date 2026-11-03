const express = require('express');
const router = express.Router();

router.post('/login',ownerLogin);
router.post('/register',ownerRegister);
router.post('./logout',ownerLogout);

module.eports = router