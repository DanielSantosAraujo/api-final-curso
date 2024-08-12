categoriaModel = require('../models/categoria-model');

async function criaCategoriaMiddlware(req,res, next) {
    const { nome } = req.body;

    if(nome === ''){
        return res.status(400).send("Nome inválido!")
    }

    next();
}

module.exports = {
    criaCategoriaMiddlware
}