const {Suppliers, SuppliersSchema} = require('./supplierModel');
const {Purchases, PurchasesSchema } = require('./purchasesModel');
const {Products, ProductsSchema} = require('./productsModel');
const {PurchasesProducts, PurchasesProductsSchema} = require('./purchasesProductsModel');
const {ProductsSales, ProductsSalesSchema} = require('./productsSalesModel');
const {Sales, SalesSchema} = require('./salesModel');
const {Games, GamesSchema} = require('./gamesModel');



function setupModels(sequelize) {
    Suppliers.init(SuppliersSchema, Suppliers.config(sequelize));
    Purchases.init(PurchasesSchema, Purchases.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
    PurchasesProducts.init(PurchasesProductsSchema, PurchasesProducts.config(sequelize));
    ProductsSales.init(ProductsSalesSchema, ProductsSales.config(sequelize));
    Sales.init(SalesSchema, Sales.config(sequelize));
    Games.init(GamesSchema, Games.config(sequelize));

    Suppliers.associate(sequelize.models);
    Purchases.associate(sequelize.models);
    Products.associate(sequelize.models);
    Sales.associate(sequelize.models);

}

module.exports = setupModels;