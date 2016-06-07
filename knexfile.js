
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/schedules'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};

