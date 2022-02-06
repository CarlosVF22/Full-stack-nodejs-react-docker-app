const express = require('express');
const ProductsService = require('../services/purchasesService');
const validatorHandler = require('./../middlewares/validatorHandler');
const {createPurchaseschema, updatePurchaseschema, getPurchaseschema, addItemSchema} = require('../schemas/purchasesSchema');

const router = express.Router();
const service = new ProductsService();

// add product in purchase
router.post('/add-item',
    validatorHandler(createProductSchema, 'body'),
    async (req, res, next) => {
        try {
        } catch (error) {
            next(error);
        }
    }
);

// read products
router.get('/', 
    validatorHandler(queryProductsSchema, 'query'),
    async (req, res, next) => {
        try {
            const products = await service.find(req.query);
            res.json(products);
        } catch (error) {
            next(error);
        }
    }
);

// read one products
router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async(req, res, next) => {
        try {
            const {id} = req.params;
            const product = await service.findOne(id);
            res.json(product);
        } catch(error) {
            next(error);
        }
    }
);

// update products
router.patch('/:id',
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            const body = req.body;
            const product = await service.update(id, body);
            res.json(product);
        } catch(error) {
            next(error);
        }
    }
);

// delete products
router.delete('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const {id} = req.params;
            await service.delete(id);
            res.status(201).json({id});
        } catch(error) {
            next(error);
        }
    }
);



module.exports = router;