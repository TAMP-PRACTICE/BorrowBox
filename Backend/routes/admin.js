const express = require('express');
const router = express.Router();

router.post('/login',adminLogin);
router.post('/register',adminRegister);
router.post('./logout',adminLogout);

module.eports = router;