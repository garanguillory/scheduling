
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').defaultTo('$2a$10$DbXgxujO97bbB41Wny61q.JWQgUoSj9YBQITBK17oJ7yL5hj8zNVy').notNullable();
    table.string('phone').unique().notNullable();
    table.string('picture').defaultTo('http://ww4.msu.ac.zw/mainsite/wp-content/uploads/2015/05/default.gif');
    table.boolean('admin').defaultTo(false).notNullable();
    table.integer('company_id').unsigned();
    table.foreign('company_id').references('id').inTable('schedules');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
