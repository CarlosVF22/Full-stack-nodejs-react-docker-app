const {Suppliers, SuppliersSchema} = require('./supplierModel');
const {Purchases, PurchasesSchema } = require('./purchasesModel');
const {Products, ProductsSchema} = require('./productsModel');
const {PurchasesProducts, PurchasesProductsSchema} = require('./purchasesProductsModel');

function setupModels(sequelize) {
    Suppliers.init(SuppliersSchema, Suppliers.config(sequelize));
    Purchases.init(PurchasesSchema, Purchases.config(sequelize));
    Products.init(ProductsSchema, Products.config(sequelize));
    PurchasesProducts.init(PurchasesProductsSchema, PurchasesProducts.config(sequelize));

    Suppliers.associate(sequelize.models);
    Purchases.associate(sequelize.models);
}

module.exports = setupModels;