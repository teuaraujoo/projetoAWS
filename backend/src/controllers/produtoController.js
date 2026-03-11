const Produto = require('../models/Pedido');

exports.getProdutos = async (req, res) => {
    try {
        return res.json(await Produto.findAll());
    } catch (error) {
        res.status(500).send(error.message);
    };
};

exports.getProdutoById = async (req, res) => {
    try {
        return res.json(await Produto.findByPk({ where: { id: req.params.id } }));
    } catch (error) {
        res.status(500).send(error.message);
    };
};


exports.createProduto = async (req, res) => {
    try {
        return res.json(await Produto.create(req.body));
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateProduto = async (req, res) => {
    try {
        return res.json(await Produto.update(req.body, { where: { id: req.params.id } }));
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteProduto = async (req, res) => {
    try {
        return res.json(await Produto.destroy({ where: { id: req.params.id } }));
    } catch (error) {
        res.status(500).send(error.message);
    }
};