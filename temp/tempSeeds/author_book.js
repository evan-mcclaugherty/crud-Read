exports.seed = function(knex, Promise) {
    return knex.raw("TRUNCATE author_book RESTART IDENTITY CASCADE").then(function() {
        return Promise.join(
            knex('author_book').insert({
                author_id: '1',
                book_id: '1'
            }),
            knex('author_book').insert({
                author_id: '5',
                book_id: '1'
            }),
            knex('author_book').insert({
                author_id: '6',
                book_id: '1'
            }),
            knex('author_book').insert({
                author_id: '2',
                book_id: '2'
            }),
            knex('author_book').insert({
                author_id: '3',
                book_id: '3'
            }),
            knex('author_book').insert({
                author_id: '4',
                book_id: '4'
            }),
            knex('author_book').insert({
                author_id: '4',
                book_id: '5'
            }),
            knex('author_book').insert({
                author_id: '4',
                book_id: '6'
            })
        );
    });
};
