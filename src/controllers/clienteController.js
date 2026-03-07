const Cliente = require('../model/Cliente');

// CREATE -> POST
// READ -> GET
// UPDATE -> PATCH OU PUT
// DELETE -> DELETE

exports.getClientes = async (req, res) => {
    try {
        return res.json(await Cliente.findAll());
    } catch (error) {
        res.status(500).send(error.message);
    };
};

exports.getClienteById = async (req, res) => {
    try {
        return res.json(await Cliente.findByPk({ where: { id: req.params.id } }));
    } catch (error) {
        res.status(500).send(error.message);
    };
};

exports.createCliente = async (req, res) => {
    try {

        return res.json(await Cliente.create(req.body));
    } catch (error) {
        res.status(500).send(error.message);
    };
};

exports.updateCliente = async (req, res) => {
    try {
        return res.json(await Cliente.update(req.body, { where: { id: req.params.id } }));
    } catch (error) {
        res.status(500).send(error.message);
    };
};

exports.deleteCliente = async (req, res) => {
    try {
        return res.json(await Cliente.destroy({ where: { id: req.params.id } }));
    } catch (error) {
        res.status(500).send(error.message);
    }
}