const {Model, DataTypes, Sequelize} = require('sequelize');

const SUPPLIER_TABLE = "supplier";

const SuppliersSchema = {
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
    phoneNumber : {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    address: {
        allowNull: true,
        type: DataTypes.STRING
    }
}

class Suppliers extends Model {
    static associate(models) {
    this.hasMany(models.Purchases, {
        as: 'purchases',
        foreignKey: 'supplierId'
    });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SUPPLIER_TABLE,
            modelName: 'Suppliers',
            timeStamps: false
        }
    }
}

module.exports = {SUPPLIER_TABLE, SuppliersSchema, Suppliers};