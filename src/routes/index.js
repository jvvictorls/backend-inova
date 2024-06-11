const Router = require('express').Router;
const UsersRouter = require('./Sigin/users.routes');

const router = Router();


router.use('/', UsersRouter);

module.exports = router;