

exports.up = function(knex, Promise) {
  return knex.schema.createTable('schedules', function(table){
    table.increments();
    table.string('company').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('schedules');
};

