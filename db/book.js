var knex = require('./dbConnection');

module.exports = {
    getAllBooks: () => knex('book').select(),
    getGenres: () => knex('genre').select()
}
