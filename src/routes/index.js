const userRouter = require('../routes/UserRoutes')
const { Router } = require('express')
const router = Router()

router.use('/', userRouter);

module.exports = router;