exports.up = function(knex, Promise) {
    return knex.schema.createTable('genre', function(table) {
        table.increments();
        table.string('genre_name').notNullable().unique();
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('genre');
};
