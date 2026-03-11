const { DataTypes } = require('sequelize');
const sequelize = require('../config/database/sequelize');
const Cliente = require('./Cliente');
const Produto = require('./Produto');

const Pedido = sequelize.define("pedido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_pedido: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {timestamps: true}, {tablename: 'pedido'});

Pedido.belongsTo(Cliente);
Cliente.hasMany(Pedido);

Produto.hasMany(Pedido); 
Pedido.belongsTo(Produto);