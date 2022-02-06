const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class PurchasesService {
    constructor() {}

    async create(data) {
        const newProduct = await models.Purchases.create(data);
        return newProduct;
    };

    async findOne(id) {
        const puchase = await models.Purchases.findByPk(id);
        if (!product) {
            throw boom.notFound('Product not found');
        }
        return puchase;
    }

    async find(query) {
        const puchase = await models.Purchases.findAll();
        return puchase;
    };
    
    async update(id, changes) {
        const puchase = await this.findOne(id);
        const rta = await puchase.update(changes);
        return rta;
    };

    async delete(id) {
        const puchase = await this.findOne(id);
        await puchase.destroy();
        return {id};
    };
}

module.exports = PurchasesService;