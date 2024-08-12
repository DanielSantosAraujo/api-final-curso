const express = require("express");
const validadeMiddlware = require("../middlewares/validate-middleware");
const router = express.Router();
const categoriaMiddleware = require("../middlewares/categoria-middlewares");
const categoriaController = require("../controllers/categoria-controller")
router.post(
    "/categoria",
    validadeMiddlware.validateTokenMiddleware,
    categoriaMiddleware.criaCategoriaMiddlware,
    categoriaController.criaCategorias
)

router.get(
    "/categoria",
    validadeMiddlware.validateTokenMiddleware,
    categoriaController.listarTodasCategorias
)

module.exports = router;