'use strict';

const { PRODUCT_TABLE } = require('./../models/productsModels');
const { DataTypes, Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PRODUCT_TABLE, {
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
      purchasePrice: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      salePrice: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
