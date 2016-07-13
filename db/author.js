var knex = require('./dbConnection');

module.exports = {
    getAuthor: (id) => knex('author').where('id', id).first(),
    getAllAuthors: () => knex('author').select(),
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
        console.log(data);
        return knex('author').insert({
            first_name: data.first_name,
            last_name: data.last_name,
            biography: data.biography,
            portrait_url: data.portrait_url
        })
    }
}
