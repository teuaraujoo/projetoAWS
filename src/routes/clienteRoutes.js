const express = require('express');
const router = express.Router();
const Cliente = require('../model/Cliente');
const { where } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        return res.json(await Cliente.findAll());
    } catch(error) {
        res.status(500).send(error.message);
    };
});

router.get('/:id', async (req, res) => {
    try {
        return res.json(await Cliente.findByPk({where: {id: req.params.id}}));
    } catch(error) {
        res.status(500).send(error.message);
    };
});

router.post('/', async (req, res) => {
    try {
        return res.json(await Cliente.create(req.body));
    } catch(error) {
        res.status(500).send(error.message);
    };
});

router.put('/:id', async (req, res) => {
    try {
        return res.json(await Cliente.update(req.body, {where: {id: req.params.id}}));
    } catch(error) {
        res.status(500).send(error.message);
    };
});

router.delete('/:id', async (req, res) => {

    try {
        res.json(await Cliente.destroy({where: {id: req.params.id}}));
    } catch(error) {
        res.status.send(error.message)
    }
});
