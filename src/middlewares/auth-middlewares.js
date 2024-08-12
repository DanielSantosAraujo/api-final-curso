const authModel = require("../models/auth-model");
const decryptPassword = require("../helpers/decryptPassword");

async function loginMiddleware(req, res, next) {
    const { email, senha } = req.body;
    
    if (!email || !senha) {
        return res.status(400).send("Dados inválidos");
    }

    const user = await authModel.getUserByEmail(email);

    if (!user){
        return res.status(404).send("Usuário não encontrado");
    }

    const decrypted =  await decryptPassword(user.senha);

    if (senha !== decrypted) {
        return res.status(400).send("Senha inválida");
    }

    const data = {
        id: user.id,
        email: user.email
    }

    req.user = data;

    next();
}

module.exports = {
    loginMiddleware
}