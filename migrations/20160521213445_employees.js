
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('phone').unique().notNullable();
    table.string('picture').defaultTo('http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif');
    table.boolean('admin').notNullable().defaultTo(false);
    table.integer('company_id').unsigned();
    table.foreign('company_id').references('id').inTable('schedules');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
