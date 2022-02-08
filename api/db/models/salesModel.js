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
    },
    discount: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Sales extends Model {
    static associate(models) {
        //
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