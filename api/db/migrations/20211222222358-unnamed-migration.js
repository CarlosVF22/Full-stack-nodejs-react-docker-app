'use strict';

const { SALES_TABLE } = require('./../models/salesModels');
const { DataTypes, Sequelize } = require('sequelize');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(SALES_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(SALES_TABLE);
  }
};
