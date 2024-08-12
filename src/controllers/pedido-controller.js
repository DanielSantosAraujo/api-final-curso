const pedidoModel = require('../models/pedido-model');

async function  criaPedido(req, res) {
    const {numeroMesa, nomeCLiente} = req.body;

    try {
        await pedidoModel.criaPedidoModel(numeroMesa, nomeCLiente);
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(201).send("Pedido aberto");
}

async function removePedido(req, res){
    const { id } = req.params;

    
    try {
        await pedidoModel.removePedidoModel(id);    
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send("Pedido deletado com sucesso");
}

async function addItemAoPedido(req, res) {
    const {pedido_id, produto_id, quantidade} = req.body;

    try {
        await pedidoModel.addItemAoPedidoModel(pedido_id, produto_id, quantidade);
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(201).send("Item inserido com sucesso");
}

async function removeItemPedido(req, res){
    const { id } = req.params;

    try {
        await pedidoModel.removeItemPedidoModel(id);    
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send("Item deletado com sucesso");
}

async function enviandoPedido(req,res) {
    const {id} = req.body;

    try {
        await pedidoModel.enviandoPedidoModel(id);    
    } catch (error) {
        return res
                .status(400)
                .send(error.message);
    }

    return res.status(200).send("Pedido enviado com sucesso");
}

async function listarTodosPedidos(req,res) {
    const pedidos = await pedidoModel.listarTodosPedidosModel();

    return res.send(pedidos);
}

async function detalhesPedidoById(req, res) {
    const {id} = req.params;


      const itensPedido = await pedidoModel.detalhesPedidoModel(id);    

    return res.status(200).send(itensPedido);
}

async function finalizarPedido(req, res) {
    const {id} = req.body;

    await pedidoModel.finalizarPedidoModel(id);

    return res.status(200).send("Pedido finalizado com sucesso");
}

module.exports = {
    criaPedido,
    removePedido,
    addItemAoPedido,
    removeItemPedido,
    enviandoPedido,
    listarTodosPedidos,
    detalhesPedidoById,
    finalizarPedido
}