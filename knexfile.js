
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/schedules'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

