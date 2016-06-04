
var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'schedules',
  file: './data/schedules.csv'
});