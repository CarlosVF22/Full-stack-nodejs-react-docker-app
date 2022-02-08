const {Model, DataTypes, Sequelize} = require('sequelize');

const GAMES_TABLE = "games";

const GamesSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    gameTime: {
        allowNull: false,
        type: DataTypes.TIME
    },
    value: {
        allowNull: false,
        type: DataTypes.STRING
    },
    tableNumber: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Games extends Model {
    static associate(models) {
        //
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: GAMES_TABLE,
            modelName: 'Games',
            timeStamps: false
        }
    }
}

module.exports = {GAMES_TABLE, GamesSchema, Games};