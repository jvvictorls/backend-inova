const { Router } = require("express");
const router = Router();  

router.get('/signup', (req, res) => {
  res.send('signup page');
});

module.exports = router;