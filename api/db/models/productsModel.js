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
    salePrice: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    stock: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}

class Products extends Model {
    static associate(models) {
        this.belongsToMany(models.Sales, {
            as: 'items',
            through: models.ProductsSales,
            foreignKey: 'productId',
            otherKey: 'salesId'
        });
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