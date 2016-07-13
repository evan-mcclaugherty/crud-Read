var knex = require('./dbConnection');

module.exports = {
    insertGenre: (genre) => {
        return knex('genre').insert({
            genre_name: genre
        }, 'id')
    },
    getBook: (id) => knex('book').where('id', id).first(),
    getAllBooks: () => knex('book').select(),
    getGenres: () => knex('genre').select(),
    deleteBook: (id) => knex('book').where('id', id).del(),
    editBook: function(id, data) {
        if (data.genre_id[1]) {
            return this.insertGenre(data.genre_id[1]).then(newId => {
                return knex('book').update({
                    title: data.title,
                    description: data.description,
                    cover_url: data.cover_url,
                    genre_id: newId[0]
                }).where('id', id)
            })
        } else {
            return knex('book').update({
                title: data.title,
                description: data.description,
                cover_url: data.cover_url,
                genre_id: data.genre_id[0]
            }).where('id', id)
        }
    },
    insertBook: function(data) {
        if (data.genre_id[1]) {
            return this.insertGenre(data.genre_id[1]).then(id => {
                return knex('book').insert({
                    title: data.title,
                    description: data.description,
                    cover_url: data.cover_url,
                    genre_id: id[0]
                })
            })
        } else {
            return knex('book').insert({
                title: data.title,
                description: data.description,
                cover_url: data.cover_url,
                genre_id: data.genre_id[0]
            })
        }
    }
}
