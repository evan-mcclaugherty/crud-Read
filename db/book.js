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
