const {Model, DataTypes, Sequelize} = require('sequelize');

const SALES_TABLE = "sales";

const SalesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    value: {
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Sales extends Model {
    static associate(models) {
        this.belongsToMany(models.Products, {
            as: 'items',
            through: models.SalesProducts,
            foreignKey: 'salesId',
            otherKey: 'productId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SALES_TABLE,
            modelName: 'Sales',
            timeStamps: false
        }
    }
}

module.exports = {SALES_TABLE, SalesSchema, Sales};