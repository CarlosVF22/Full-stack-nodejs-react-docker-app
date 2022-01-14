const {models} = require('./../libs/sequelize');

class ProductsService {
    constructor() {}

    // async create(data) {
    //     const newSale = await models.Products.create(data);
    //     return newSale;
    // }

    async find() {
        const rta = await models.Products.findAll({
            attributes: ['name','value','quantity']
        });
        return rta;
    }
}

module.exports = ProductsService;