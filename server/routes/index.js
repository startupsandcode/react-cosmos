var express = require('express');
var router = express.Router();
var youtube = require('../youtube-service');

router.get('/videos', function(req, res, next) {
  youtube.get(req, res);

  // res.json(videos);
});

module.exports = router;
