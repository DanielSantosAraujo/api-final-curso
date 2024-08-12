const express = require('express');
// const router = require('./routers/router');
const app = express();
// const expressAsyncError = require('express-async-errors');
// const routerAuth = require('./routers/router-auth');
// const routerDetalhes = require('./routers/router-detalhes');
const routerCategoria = require('./routers/router-categoria');
const routerProduto = require('./routers/router-produto')
const routerPedido = require('./routers/router-pedido');
const routerUser = require('./routers/router-user')

app.use(express.json());
app.use(routerUser);
// app.use(routerAuth);
// app.use(routerDetalhes);
app.use(routerCategoria);
app.use(routerProduto);
app.use(routerPedido);


module.exports = app;