const express = require("express");
const router = express.Router();
const userMiddleware = require('../middlewares/user-middlewares');
const userController = require("../controllers/user-controller");
const authMiddleware = require('../middlewares/auth-middlewares');
const authController = require("../controllers/auth-controller");
const validadeMiddlware = require("../middlewares/validate-middleware");
const detalhesController =require("../controllers/detalheUsuario-controller")
router.post('/users', userMiddleware.criaUsuarioMiddleware, userController.criaUsuario)
router.post('/login', authMiddleware.loginMiddleware, authController.login)
router.get("/detalhes", validadeMiddlware.validateTokenMiddleware, detalhesController.detalhesUsuario)

module.exports = router;