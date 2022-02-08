const {Model, DataTypes, Sequelize} = require('sequelize');

const {GAMES_TABLE} = require('./gamesModel');

const SALES_TABLE = "sales";

const SalesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    gameId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: GAMES_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
        this.hasOne(models.Games, {
            as: 'games'
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