const { Router } = require('express');
const router = Router();
const UserController = require('../controller/UserController');

router.get('/', UserController.findAllUsers);

router.post('/login', UserController.login);


module.exports = router;