'use strict';

const { SALES_TABLE } = require('./../models/salesModels');
const { PRODUCT_TABLE } = require('./../models/productsModels');
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
        type: DataTypes.STRING
      }
    });
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
      value: {
        allowNull: false,
        type: DataTypes.STRING
      },
      quantity: {
        allowNull: false,
        type: DataTypes.STRING
      },
      salesId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: SALES_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    })
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(SALES_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};

