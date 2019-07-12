var express = require('express');
var router = express.Router();
const service  = require('../services/reservations-service');

/* GET resercations list. */
router.get('/', function(req, res, next) {
    res.json(service.listReservations());
});

module.exports = router;
