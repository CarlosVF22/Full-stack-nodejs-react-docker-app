const Joi = require('joi');

const id = Joi.number().integer();
const gameTime = Joi.string().min(3);
const value = Joi.number().integer();
const tableNumber = Joi.number().integer();

const createGameschema = Joi.object({
    gameTime: gameTime.required(),
    value: value.required(),
    tableNumber: tableNumber.required()
});

const updateGameschema = Joi.object({
    gameTime: gameTime,
    value: value,
    tableNumber: tableNumber
});

const getGameschema = Joi.object({
    id: id.required()
});

module.exports = {createGameschema, updateGameschema, getGameschema}