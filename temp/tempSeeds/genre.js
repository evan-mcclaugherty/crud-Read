exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE genre RESTART IDENTITY CASCADE").then(function() {
        return Promise.join(
            knex('genre').insert({
                genre: 'Python'
            }),
            knex('genre').insert({
                genre: 'JavaScript'
            })
        );
    });
};
