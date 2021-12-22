const express = require('express');

const salesRouter = require('./salesrouter');
const testApiRouter = require('./testApiRouter');

function routerApi(app){
    const router = express.Router();
    const apiVersion = 'v1';
    app.use(`/api/${apiVersion}`, router);
    router.use('/sales', salesRouter);
    router.use('/testapi', testApiRouter);
}

module.exports = routerApi;