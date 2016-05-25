var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express11111你死定发送时刻能够快乐时光克里斯' ,username:req.session.username});
});
module.exports = router;
