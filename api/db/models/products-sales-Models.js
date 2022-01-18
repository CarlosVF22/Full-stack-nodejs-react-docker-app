const {Model, DataTypes, Sequelize} = require('sequelize');

const {SALES_TABLE} = require('./salesModels');
const {PRODUCT_TABLE} = require('./productsModels');

const SALES_PRODUCT_TABLE = "sales_products";

const salesProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    salesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: SALES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
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
    }
}

class SalesProducts extends Model {
    static associate(models) {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SALES_PRODUCT_TABLE,
            modelName: 'SalesProducts',
            timeStamps: false
        }
    }
}

module.exports = {SALES_PRODUCT_TABLE, salesProductsSchema, SalesProducts};