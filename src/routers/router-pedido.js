const express = require("express");
const validadeMiddlware = require("../middlewares/validate-middleware");
const router = express.Router();
// const pedidoMiddleware = require("../middlewares/pedido-middlewares");
const pedidoController = require("../controllers/pedido-controller");

router.post("/pedido",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.criaPedido
)

router.delete("/pedido/:id",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.removePedido
)

router.post("/pedido/adiciona",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.addItemAoPedido
)

router.delete("/pedido/remove/:id",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.removeItemPedido
)

router.put("/pedido/enviado",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.enviandoPedido
)

router.get("/pedidos",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.listarTodosPedidos
)

router.get("/pedido/detalhes/:id",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.detalhesPedidoById
)

router.put("/pedido/finalizado",
    validadeMiddlware.validateTokenMiddleware,
    pedidoController.finalizarPedido
)

module.exports = router;