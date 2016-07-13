var api = require('../db/api');
var express = require('express');
var router = express.Router();


router.get('/new', function(req, res, next) {
    api.book.getGenres().then(genres => {
        res.render('book/addBook', {
            genres: genres
        });
    })
});

router.post('/', (req, res, next) => {
    api.book.insertBook(req.body).then(() => {
        res.redirect('/')
    })
})

module.exports = router;
