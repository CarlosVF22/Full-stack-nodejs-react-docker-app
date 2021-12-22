const {Sales, SalesSchema} = require('./salesModels');

function setupModels(sequelize) {
    Sales.init(SalesSchema, Sales.config(sequelize));
}

module.exports = setupModels;