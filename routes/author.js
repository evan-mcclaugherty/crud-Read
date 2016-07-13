var api = require('../db/api');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    api.author.getAllAuthors().then(authors => {
        console.log(authors);
        res.render('author/author', {
            author: authors
        })
    })
});

module.exports = router;
