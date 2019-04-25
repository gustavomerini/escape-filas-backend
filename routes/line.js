var express = require('express');
var router = express.Router();
var api = require('../api/line');

router.post('/user', api.user);
router.post('/report', api.report);

module.exports = router;