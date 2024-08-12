const express = require("express");
const validadeMiddlware = require("../middlewares/validate-middleware");
const router = express.Router();
const produtoMiddleware = require("../middlewares/produto-middlewares");
const produtoController = require("../controllers/produto-controller");
router.post(
    "/produto",
    validadeMiddlware.validateTokenMiddleware,
    produtoMiddleware.criaProdutoMiddleware,
    produtoController.criaProduto
)

router.get(
    "/produto/:id",
    validadeMiddlware.validateTokenMiddleware,
    produtoMiddleware.pegaProdutosPelaCategoriaMiddleware,
    produtoController.pegaProdutosPelaCategoria
)

module.exports = router;