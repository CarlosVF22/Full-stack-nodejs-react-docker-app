'use strict';

const {SUPPLIER_TABLE, SuppliersSchema} = require('./../models/supplierModel');
const {PURCHASES_TABLE, PurchasesSchema} = require('./../models/purchasesModel');
const {PURCHASE_PRODUCT_TABLE, PurchasesProductsSchema} = require('./../models/purchasesProductsModel');
const {PRODUCT_TABLE, ProductsSchema} = require('./../models/productsModel');
const {PRODUCT_SALE_TABLE, ProductsSalesSchema} = require('./../models/productsSalesModel');
const {SALES_TABLE, SalesSchema} = require('./../models/salesModel');
const {GAMES_TABLE, GamesSchema} = require('./../models/gamesModel');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SUPPLIER_TABLE, SuppliersSchema)
    await queryInterface.createTable(PURCHASES_TABLE, PurchasesSchema);
    await queryInterface.createTable(PURCHASE_PRODUCT_TABLE, PurchasesProductsSchema);
    // await queryInterface.createTable(PRODUCT_TABLE, ProductsSchema);
    await queryInterface.createTable(PRODUCT_SALE_TABLE, ProductsSalesSchema);
    await queryInterface.createTable(SALES_TABLE, SalesSchema);
    await queryInterface.createTable(GAMES_TABLE, GamesSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(SUPPLIER_TABLE)
    await queryInterface.dropTable(PURCHASES_TABLE)
    await queryInterface.dropTable(PURCHASE_PRODUCT_TABLE)
    // await queryInterface.dropTable(PRODUCT_TABLE)
    await queryInterface.dropTable(PRODUCT_SALE_TABLE)
    await queryInterface.dropTable(SALES_TABLE)
    await queryInterface.dropTable(GAMES_TABLE)
  }
};
