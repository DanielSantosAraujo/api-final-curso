const detalhesModel = require("../models/detalheUsuario-model")

async function detalhesUsuario(req, res) {

    return res.send("Se chegou é porque tá funcionando")
}

module.exports = {
    detalhesUsuario
}