
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments();
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
