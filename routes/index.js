var api = require('../db/api');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    api.book.getAllBooks().then(books => {
        res.render('book/book', {
            book: books
        })
    })
});

module.exports = router;
