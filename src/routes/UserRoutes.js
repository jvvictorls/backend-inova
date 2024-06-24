const { Router } = require('express');
const router = Router();
const UserController = require('../controller/UserController');

router.get('/', UserController.findAllUsers);

router.post('/login', UserController.login);

router.post('/signin', UserController.create);  


module.exports = router;