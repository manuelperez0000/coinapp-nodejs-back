var express = require('express');
var router = express.Router();

router.get('/apirouter/router1', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  
  module.exports = router;