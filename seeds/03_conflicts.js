
var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
  table: 'conflicts',
  file: './data/conflicts.csv'
});