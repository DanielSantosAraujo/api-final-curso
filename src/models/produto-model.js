const connection = require('./connection');

async function criaProdutoModel(nome, preco, descricao, banner, categoria_id) {
    await connection.query(`
        INSERT INTO produtos (nome, preco, descricao, banner, categoria_id) VALUES (
        '${nome}',
        '${preco}',
        '${descricao}',
        '${banner}',
        ${categoria_id}
        )`)

    return;
}

async function pegaProdutoPeloNomeModel(nome){
    const produto = await connection.query(
        `SELECT * FROM produtos WHERE nome LIKE '${nome}'`
    )

    return produto.rows[0];
}

async function pegaProdutosPelaCategoriaModel(categoria_id){
    const produtos = await connection.query(
        `SELECT nome, preco, descricao FROM produtos WHERE categoria_id = ${categoria_id}`
    )

    return produtos.rows;
}

module.exports = {
    criaProdutoModel,
    pegaProdutoPeloNomeModel,
    pegaProdutosPelaCategoriaModel
}