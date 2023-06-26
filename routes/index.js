const express = require('express');
const router = express.Router();
const  userController = require('../controller/Controller')

router.get('/login',userController.loginForm)
router.post('/home',userController.login)

module.exports = router;