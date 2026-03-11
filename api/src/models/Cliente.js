const sequelize = require('../config/database/sequelize');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define("cliente", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.CHAR(11),
        allowNull: true
    },
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('M', 'F'),
        allowNull: false
    }
},{timestamps: false}, {tablename: 'cliente'});

module.exports = Cliente;
