var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) =>{
    res.send({text: 'API funcionando'});
});

module.exports = router;