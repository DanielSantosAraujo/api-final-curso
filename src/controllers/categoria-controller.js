const categoriaModel = require('../models/categoria-model')

async function listarTodasCategorias(req, res) {
    const categorias = await categoriaModel.listarTodasCategoriasModel();

    return res.send(categorias);
}

async function criaCategorias(req, res) {
    const { nome } = req.body;

     await categoriaModel.criaCategoriaModel(nome);

    return res.status(201).send("Categoria inserida com sucesso");
}

module.exports = {
    criaCategorias,
    listarTodasCategorias
}