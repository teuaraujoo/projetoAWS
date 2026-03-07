const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/sequelize');

const Produto = sequelize.define("produto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    qtd_estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {timestamps: true}, {tablename: 'produto'});

module.exports = Produto;