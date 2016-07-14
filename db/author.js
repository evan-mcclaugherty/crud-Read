var knex = require('./dbConnection');

module.exports = {
    getAuthor: (id) => knex('author').where('id', id).first(),

    getBooksWithAuthors: () => knex('author').map(ea => {
        return knex('author_book').where('author_id', ea.id).pluck('book_id').then(bookIds => {
            return knex('book').whereIn('book.id', bookIds).then(books => {
                return Object.assign(ea, {
                    books
                })
            })
        })
    }),

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
