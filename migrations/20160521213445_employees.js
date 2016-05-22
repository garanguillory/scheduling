
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('phone').unique().notNullable();
    table.boolean('admin').notNullable();
    table.integer('company_id').unsigned();
    table.foreign('company_id').references('id').inTable('schedules');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
