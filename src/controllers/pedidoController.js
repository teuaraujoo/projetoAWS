const Pedido = require('../models/Pedido');

exports.getPedidos = async (req, res) => {
    try {
        return res.json(await Pedido.findAll());
    } catch(error) {
        res.status(500).send(error.message);
    };
};

exports.getPedidoById = async (req, res) => {
    try {
        return res.json(await Pedido.findByPk({ where: { id: req.params.id } }));
    } catch(error) {
        res.status(500).send(error.message);
    };
};

exports.createPedido = async (req, res) => {
    try {
        return res.json(await Pedido.create(req.body));
    } catch(error) {
        res.status(500).send(error.message);
    };
};

exports.updatePedido = async (req, res) => {
    try {
        return res.json(await Pedido.update(req.body, { where: { id: req.params.id } }));
    } catch(error) {
        res.status(500).send(error.message);
    };
};

exports.deletePedido = async (req, res) => {
    try {
        return res.json(await Pedido.destroy({ where: { id: req.params.id } }));
    } catch(error) {
        res.status(500).send(error.message);
    };
};