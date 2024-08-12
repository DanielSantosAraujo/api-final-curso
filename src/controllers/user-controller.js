const userModel = require('../models/user-model');
const encryptPassword = require('../helpers/encryptPassword');

async function criaUsuario(req, res){
    const { nome, email, senha } = req.body;

    const pass = await encryptPassword(senha);

    try {
        await userModel.criaUsuarioModel(nome, email, pass);
    } catch (error) {
        return res
                .status(400)
                .send("Email já cadastrado");
    }

    return res.status(201).send("Usuário inserido com sucesso");
}

module.exports = {
    criaUsuario
}