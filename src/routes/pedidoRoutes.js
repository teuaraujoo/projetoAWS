const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

router.get('/', pedidoController.getPedidos);
router.get('/:id', pedidoController.getPedidosById);
router.create('/:id', pedidoController.createPedido);
router.update('/:id', pedidoController.updatePedido);
router.delete('/:id', pedidoController.deletePedido);

module.exports = router;
