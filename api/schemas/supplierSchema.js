const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const phoneNumber = Joi.string().min(7);
const address = Joi.string();

const createSupplierSchema = Joi.object({
    name: name.required(),
});

const updateSupplierSchema = Joi.object({
    name: name,
    phoneNumber: phoneNumber,
    salePrice: salePrice,
    address: address
});

const getSupplierSchema = Joi.object({
    id: id,
    name: name
});

const querySuppliersSchema = Joi.object({
    id,
    name,
    phoneNumber,
    address
});

module.exports = {createSupplierSchema,updateSupplierSchema,getSupplierSchema, querySuppliersSchema}