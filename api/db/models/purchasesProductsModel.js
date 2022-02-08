const {Model, DataTypes, Sequelize} = require('sequelize');

const {PURCHASES_TABLE} = require('./purchasesModel');
const {PRODUCT_TABLE} = require('./productsModel');

const PURCHASE_PRODUCT_TABLE = "purchases_products";

const PurchasesProductsSchema = {
    purchasesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: PURCHASES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    purchasePrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

class PurchasesProducts extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PURCHASE_PRODUCT_TABLE,
            modelName: 'PurchasesProducts',
            timeStamps: false
        }
    }
}

module.exports = {PURCHASE_PRODUCT_TABLE, PurchasesProductsSchema, PurchasesProducts};