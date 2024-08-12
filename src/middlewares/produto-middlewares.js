const produtoModel = require("../models/produto-model");

async function criaProdutoMiddleware(req, res, next) {
    const { nome, preco, descricao, banner, categoria_id} = req.body;

    if (!nome || !preco || !descricao || !banner || !categoria_id) {
        return res.status(400).send("Dados incompletos");
    }

    const produto = await produtoModel.pegaProdutoPeloNomeModel(nome);

    if (produto) {
        return res.status(400).send("Produto já cadastrado");
    }

    next();
}

async function pegaProdutosPelaCategoriaMiddleware(req, res, next) {
    const {id} = req.params;

    const categoria = await produtoModel.pegaProdutosPelaCategoriaModel(id);

    if(!categoria){
        return res.status(404).send("Produtos não encontrado");
    }

    next();
}

module.exports = {
    criaProdutoMiddleware,
    pegaProdutosPelaCategoriaMiddleware
}