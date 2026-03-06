const { Sequelize } = require('sequelize');

new Sequelize("meubanco", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;