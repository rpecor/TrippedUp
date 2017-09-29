module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'trippedup',
    user: process.env.DB_USER || 'trippedup',
    password: process.env.DB_PASSWORD || 'trippedup',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './trippedup.sqlite'
    }
  }
}
