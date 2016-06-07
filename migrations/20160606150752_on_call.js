
exports.up = function(knex, Promise) {
  return knex.schema.createTable('on_call', function(table){
    table.increments();
    table.integer('employee_id').unsigned();
    table.foreign('employee_id').references('id').inTable('employees');
    table.integer('company_id').unsigned();
    table.foreign('company_id').references('id').inTable('schedules');
    table.timestamp('date').notNullable();
    table.integer('type'); // 1,2,3
    table.unique(['employee_id', 'date']);
    // table.string('shift').defaultTo('All');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('on_call');
};
