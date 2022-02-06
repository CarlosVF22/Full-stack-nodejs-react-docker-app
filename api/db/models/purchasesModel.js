const {Model, DataTypes, Sequelize} = require('sequelize');

const {SUPPLIER_TABLE} = require('./supplierModel');

const PURCHASES_TABLE = "supplier";

const PurchasesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    purchasePrice: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    supplierId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: SUPPLIER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Purchases extends Model {
    static associate(models) {
        this.belongsTo(models.Suppliers, {
            as:'supplier'
        });
        this.belongsToMany(models.Products, {
            as: 'items',
            through: models.PurchasesProducts,
            foreignKey: 'purchasesId',
            otherKey: 'productId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PURCHASES_TABLE,
            modelName: 'Purchases',
            timeStamps: false
        }
    }
}

module.exports = {PURCHASES_TABLE, PurchasesSchema, Purchases};