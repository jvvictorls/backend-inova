const { Router } = require("express");
const { findAll } = require("../../controller/UserController");
const router = Router();  


router.get('/', async (req, res) => {
  return res.status(200).json("hello world"); 
});

module.exports = router;