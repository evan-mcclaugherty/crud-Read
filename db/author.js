var knex = require('./dbConnection');

module.exports = {
    getAuthor: (id) => knex('author').where('id', id).first(),

    getAllAuthors: () => knex('author').select(),

    getBookWithAuthors: () =>
        knex('author').join('author_book', 'author.id', 'author_book.author_id').join('book', 'book.id', 'author_book.book_id'),

    getSingleBookWithAuthors: (id) => knex('author').where('id', id)
        .then(author =>
            knex('author_book').where('author_id', id).pluck('book_id')
            .then(bookIds => {
                return knex('book').whereIn('book.id', bookIds).returning('title').then(bookNames => {
                    return {
                        author,
                        bookNames
                    }
                })
            })),

    deleteAuthor: (id) => knex('author').where('id', id).del(),
    editAuthor: function(id, data) {
        return knex('author').update({
            first_name: data.first_name,
            last_name: data.last_name,
            biography: data.biography,
            portrait_url: data.portrait_url
        }).where('id', id)
    },

    insertAuthor: data => {
        return knex('author').insert({
            first_name: data.first_name,
            last_name: data.last_name,
            biography: data.biography,
            portrait_url: data.portrait_url
        })
    }
}
