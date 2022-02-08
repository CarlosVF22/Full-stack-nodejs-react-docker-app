const Joi = require('joi');

const id = Joi.number().integer();
const value = Joi.number().integer();
const discount = Joi.number().integer();


const createSaleschema = Joi.object({
    
});

const updateSaleschema = Joi.object({

});

const getSaleschema = Joi.object({

});

module.exports = {createSaleSchema}