const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCT_TABLE = "products";

const ProductsSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    value: {
        allowNull: false,
        type: DataTypes.STRING
    },
    quantity: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Products extends Model {
    static associate() {

    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Products',
            timeStamps: false
        }
    }
}

module.exports = {PRODUCT_TABLE, ProductsSchema, Products};