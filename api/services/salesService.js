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
}

module.exports = SalesService;