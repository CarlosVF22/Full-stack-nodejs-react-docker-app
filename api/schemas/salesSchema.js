const Joi = require('joi');

const id = Joi.number().integer();
const value = Joi.number().integer();
const discount = Joi.number().integer();


const createSaleschema = Joi.object({
    value: value.required(),
    discount: discount.required()
});

const updateSaleschema = Joi.object({
    value: value,
    discount: discount
});

const getSaleschema = Joi.object({
    id: id.required()
});

module.exports = {createSaleschema, updateSaleschema, getSaleschema}