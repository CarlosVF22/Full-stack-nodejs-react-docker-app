const express = require('express');

const ProductsService = require('../services/productsService');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req,res) => {
    const products = await service.find();
    res.json(products);
});

module.exports = router;