const Joi = require('joi');

const id = Joi.number().integer();
const supplierId = Joi.number().integer();
const purchasePrice = Joi.number().integer();
const purchasesId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer();


const createPurchaseschema = Joi.object({
    supplierId: supplierId.required(),
    purchasePrice: purchasePrice.required()
});

const updatePurchaseschema = Joi.object({
    supplierId: supplierId,
    purchasePrice: purchasePrice
});

const getPurchaseschema = Joi.object({
    id: id.required(),
});

const addItemSchema = Joi.object({
    purchasesId: purchasesId.required(),
    productId: productId.required(),
    amount: amount.required(),
});

module.exports = {createPurchaseschema,updatePurchaseschema,getPurchaseschema, addItemSchema}