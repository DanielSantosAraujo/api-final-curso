const connection = require('./connection')

async function detalhesUsuarioPeloIdModel(id) {
    const usuario = await connection.query(`
        SELECT nome, email FROM usuarios WHERE id = ${id}
    `)
}

module.exports = {
    detalhesUsuarioPeloIdModel
}