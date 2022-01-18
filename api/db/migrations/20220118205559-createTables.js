'use strict';

const { SALES_TABLE } = require('./../models/salesModels');
const { PRODUCT_TABLE } = require('./../models/productsModels');
const { SALES_PRODUCT_TABLE } = require('./../models/products-sales-Models');
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
      }
    });
    await queryInterface.createTable(SALES_PRODUCT_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
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
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      productId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: PRODUCT_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(SALES_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(SALES_PRODUCT_TABLE);
  }
};
