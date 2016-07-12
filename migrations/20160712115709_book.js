exports.up = function(knex, Promise) {
    return knex.schema.createTable('book', function(table) {
        table.increments();
        table.string('title').notNullable().unique();
        table.text('description').notNullable();
        table.string('cover_url').notNullable();
        table.integer('genre_id').references('id').inTable('genre').onDelete('cascade');
    })
};
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('book');
};
