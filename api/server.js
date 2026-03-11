// entry point

const express = require('express');
const produtoRoutes = require('./src/routes/produtoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const pedidoRoutes = require('./src/routes/pedidoRoutes');
// const sequelize = require('./src/config/database/sequelize');

const app = express();

app.use(express.json());
app.use(express.cors());
app.use(express.static('public'));

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);

// cors -> mecanismo de segurança que premite que um servidor autorize recursos a serem acessados 
// sequelize sync -> sincroniza automaticamente os models com as tabelas correspondentes do banco
// force -> true -> drop all tables and recreate them
// alter -> true -> modify tables to match the model

sequelize.sync(/*{force: true}, {alter: true}*/).then(() => {
    console.log('Database synchronized');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
}).catch((error) => {
    console.error('Error synchronizing database:', error);
});
