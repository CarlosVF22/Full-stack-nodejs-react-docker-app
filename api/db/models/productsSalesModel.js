const {Model, DataTypes, Sequelize} = require('sequelize');

const {PRODUCT_TABLE} = require('./productsModel');
const {SALES_TABLE} = require('./salesModel');

const PRODUCT_SALE_TABLE = 'products_sales';

const ProductsSalesSchema = {
    salesId : {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: SALES_TABLE,
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
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

class ProductsSales extends Model {
    static associate(models) {
        //
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_SALE_TABLE,
            modelName: 'ProductsSales',
            timeStamps: false
        }
    }
}

module.exports = {PRODUCT_SALE_TABLE, ProductsSalesSchema, ProductsSales}