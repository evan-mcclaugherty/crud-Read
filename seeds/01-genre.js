exports.seed = function(knex, Promise) {

    return knex.raw("TRUNCATE genre RESTART IDENTITY CASCADE").then(function() {
        return Promise.all([
            knex('genre').insert({
                genre_name: 'Python',
            }),
            knex('genre').insert({
                genre_name: 'JavaScript',
            })
        ]);
    });
};
