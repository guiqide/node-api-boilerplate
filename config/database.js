module.exports = {
  development: {
    username: 'root',
    password: 'Skate0910',
    database: 'pdd_recommand',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'Skate0910',
    database: 'pdd_recommand',
    host: '127.0.0.1:15014',
    dialect: 'mysql',
    logging: null
  },
  production: process.env.DATABASE_URL
};
