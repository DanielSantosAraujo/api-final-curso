const validateToken = require("../helpers/validateToken");

async function validateTokenMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

    const[, token] = authToken.split(" ");
 
    
    
    if (!token) {
        return res.status(401).send("Token não encontrado");
    }

    const tokenIsValid = await validateToken(token);

    
    if (!tokenIsValid) {
        return res.status(401).send("Token expirado ou inválido");
    }

    next();
}

module.exports = {
    validateTokenMiddleware
}