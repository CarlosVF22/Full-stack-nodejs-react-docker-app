const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class PurchasesService {
    constructor() {}

    async create(data) {

    };

    async addItem(data) {
        const newItem = await models.PurchasesProducts.create(data);
        return newItem;
    }

    async findOne(id) {
        const purchase = await models.Purchases.findByPk(id, {
            include: [
                'items',
            ]
        });
        return purchase;
    }

    async find(query) {

    };
    
    async update(id, changes) {

    };

    async delete(id) {

    };
}

module.exports = PurchasesService;