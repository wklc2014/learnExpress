var express = require('express');
var router = express.Router();
var path = require('path');

var html = {
    regular: path.resolve(__dirname, '../html/regular.html'),
    special: path.resolve(__dirname, '../html/special.html')
}

/* GET users listing. */
router.get('/:id', function(req, res, next) {

    if (req.params.id == 0) {
        next('route');
    } else {
        next();
    }

}, function (req, res, next) {
    res.sendFile(html.regular);
});

router.get('/:id', function (req, res, next) {
    res.sendFile(html.special);
});

module.exports = router;
