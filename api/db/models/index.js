const {Sales, SalesSchema} = require('./salesModels');
const {Products, ProductsSchema} = require('./productsModels');
const {SalesProducts, salesProductsSchema} = require('./products-sales-Models');

function setupModels(sequelize) {
    Sales.init(SalesSchema, Sales.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
    SalesProducts.init(salesProductsSchema, SalesProducts.config(sequelize));

    Sales.associate(sequelize.models);
}

module.exports = setupModels;