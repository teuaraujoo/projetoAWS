const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

const app = express();

app.use(express.json());

app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);


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
