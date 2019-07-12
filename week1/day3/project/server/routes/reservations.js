var express = require('express');
var router = express.Router();

/* GET resercations list. */
router.get('/', function(req, res, next) {
    
    res.json([{
        id: 1,
        name: "Daniela Agrippa, party of 2 @ 8pm"
    }, {
        id: 2,
        name: "Phaidros Guillaume, party of 5 @ 7pm"
    }]);
});

module.exports = router;
