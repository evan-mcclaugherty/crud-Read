var api = require('../db/api');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    api.book.getAuthorsWithBooks().then(data => {
        api.book.getGenres().then(genres => {
            res.render('book/book', {
                genres: genres,
                data: data
            })
        })
    })
});


router.get('/new', function(req, res, next) {
    api.book.getGenres().then(genres => {
        res.render('book/addBook', {
            genres: genres
        });
    })
});

router.get('/specific/:id', (req, res, next) => {
    api.book.getSingleBookWithAuthors(req.params.id).then(data => {
        res.render('book/specificBook', {
            book: data.book[0],
            authorNames: data.authorNames
        })
    })
})

router.get('/edit/:id', (req, res, next) => {
    api.book.getBook(req.params.id).then(book => {
        api.book.getGenres().then(genres => {
            res.render('book/editBook', {
                book: book,
                genres: genres,
                thisGenreName: genres.filter(ea => book.genre_id == ea.id)[0].genre_name
            })
        })
    })
})

router.put('/:id', (req, res, next) => {
    api.book.editBook(req.params.id, req.body).then(() => {
        res.redirect('/')
    })
})

router.post('/', (req, res, next) => {
    api.book.insertBook(req.body).then(() => {
        res.redirect('/book')
    })
})

router.get('/delete/:id', (req, res, next) => {
    api.book.getSingleBookWithAuthors(req.params.id).then(data => {
        res.render('book/specificBook', {
            book: data.book[0],
            authorNames: data.authorNames
        })
    })
})


router.delete('/:id', (req, res, next) => {
    api.book.deleteBook(req.params.id).then(() => {
        res.redirect('/')
    })
})

module.exports = router;
