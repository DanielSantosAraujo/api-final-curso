const produtoModel = require('../models/produto-model')

async function criaProduto(req, res) {
    const { nome, preco, descricao, banner, categoria_id} = req.body;

    await produtoModel.criaProdutoModel(nome, preco, descricao, banner, categoria_id);

    return res.status(201).send("Produto inserido com sucesso");
}

async function pegaProdutosPelaCategoria(req, res) {
    const {id} = req.params;

    const categoria = await produtoModel.pegaProdutosPelaCategoriaModel(id);

    return res.send(categoria);
}

module.exports = {
    criaProduto,
    pegaProdutosPelaCategoria
}