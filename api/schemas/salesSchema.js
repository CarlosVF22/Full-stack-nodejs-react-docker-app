const Joi = require('joi');

// const id = Joi.number().integer();
const value = Joi.number().integer();
// const date = Joi.date().timestamp();

const createSaleSchema = Joi.object({
    value: value.required()
});

module.exports = {createSaleSchema}