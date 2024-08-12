const connection = require('./connection');

async function criaCategoriaModel(nome) {
    await connection.query(`
        INSERT INTO categorias (nome) VALUES ('${nome}')
    `)

    return;
}

async function listarTodasCategoriasModel() {
    const categorias = await connection.query(
        'SELECT id, nome FROM categorias'
    )

    return categorias.rows;
}

module.exports = {
    criaCategoriaModel,
    listarTodasCategoriasModel
}