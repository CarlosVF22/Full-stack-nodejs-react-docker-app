const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const salePrice = Joi.number().integer();
const stock = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
    name: name.required(),
    salePrice: salePrice.required(),
    stock: stock.required()
});

const updateProductSchema = Joi.object({
    name: name,
    salePrice: salePrice,
    stock: stock
});

const getProductSchema = Joi.object({
    id: id.required(),
});

const queryProductsSchema = Joi.object({
    limit,
    offset,
    salePrice
});

module.exports = {createProductSchema,updateProductSchema,getProductSchema, queryProductsSchema}