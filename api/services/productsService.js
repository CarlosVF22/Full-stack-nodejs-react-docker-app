const boom = require('@hapi/boom');

const {models} = require('./../libs/sequelize');

class ProductsService {
    constructor() {}

    async create(data) {
        const newProduct = await models.Products.create(data);
        return newProduct;
    };

    async findOne(id) {
        const product = await models.Products.findByPk(id);
        if (!product) {
            throw boom.notFound('Product not found');
        }
        return product;
    }

    async find(query) {
        const products = await models.Products.findAll();
        return products;
    };
    
    async update(id, changes) {
        const product = await this.findOne(id);
        const rta = await product.update(changes);
        return rta;
    };

    async delete(id) {
        const product = await this.findOne(id);
        await product.destroy();
        return {id};
    };
}

module.exports = ProductsService;