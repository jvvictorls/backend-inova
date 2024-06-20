const { Router } = require("express");
const { findAll } = require("../../controller/UserController");
const router = Router();  


router.get('/', async (req, res) => {
  return findAll(req, res);
});

module.exports = router;