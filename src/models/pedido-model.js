const connection = require("./connection");

async function criaPedidoModel(numeroMesa, nomeCliente) {
    await connection.query(`
        INSERT INTO pedidos (numeroMesa, nomeCliente) VALUES (${numeroMesa}, '${nomeCliente}')
    `)

    return;
}

async function removePedidoModel(id) {
    await connection.query(`
        DELETE FROM pedidos WHERE id = ${id}
    `)

    return;
}

async function addItemAoPedidoModel(pedido_id, produto_id, quantidade) {
    await connection.query(`
        INSERT INTO itenspedidos (pedido_id, produto_id, quantidade) 
        VALUES (${pedido_id}, ${produto_id}, ${quantidade})   
   `)

    return;
}

async function removeItemPedidoModel(id) {
    await connection.query(`
       DELETE FROM itenspedidos WHERE id = ${id}
   `)

    return;
}

async function enviandoPedidoModel(id) {
    await connection.query(`
        UPDATE pedidos 
        SET rascunho = false
        WHERE id = ${id}
    `)

    return;
}

async function listarTodosPedidosModel() {
    const pedidos = await connection.query(`
        SELECT * FROM pedidos
        WHERE status = false AND rascunho = false
        ORDER BY criado_em DESC;
    `)

    return pedidos.rows;
}

async function detalhesPedidoModel(id) {
    const itensPedido = await connection.query(`
        SELECT * FROM itenspedidos ip
        INNER JOIN pedidos pe ON pe.id = ip.pedido_id
        INNER JOIN produtos pro ON pro.id = ip.produto_id
        WHERE ip.id = ${id}
    `)

    return itensPedido.rows;
}

async function finalizarPedidoModel(id) {
    await connection.query(`
        UPDATE pedidos 
        SET status = true
        WHERE id = ${id}
    `)

    return;
}

module.exports = {
    criaPedidoModel,
    removePedidoModel,
    addItemAoPedidoModel,
    removeItemPedidoModel,
    enviandoPedidoModel,
    listarTodosPedidosModel,
    detalhesPedidoModel,
    finalizarPedidoModel
}