const {models} = require('./../libs/sequelize');

class SalesService {
    constructor() {}

    async create(data) {
        const newSale = await models.Sales.create(data);
        return newSale;
    }

    async find() {
        const rta = await models.Sales.findAll({
            attributes: ['value']
        });
        return rta;
    }

    async addItem(data) {
        const newItem = await models.SalesProducts.create(data);
        return newItem;
    }
}

module.exports = SalesService;