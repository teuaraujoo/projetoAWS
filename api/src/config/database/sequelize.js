const { Sequelize } = require('sequelize');

new Sequelize("database_jovemtech", "admin", "123456AA", {
    host: 'databasejv.cbakqe8u8191.sa-east-1.rds.amazonaws.com',
    dialect: 'mysql',
});

module.exports = sequelize;