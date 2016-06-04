
var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'employees',
  file: './data/employees.csv'
});