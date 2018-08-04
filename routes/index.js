var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.loadAll(function(err,results){
    res.json(results);
  });
});

module.exports = router;
