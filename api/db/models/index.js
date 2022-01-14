const {Sales, SalesSchema} = require('./salesModels');
const {Products, ProductsSchema} = require('./productsModels');

function setupModels(sequelize) {
    Sales.init(SalesSchema, Sales.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
}

module.exports = setupModels;