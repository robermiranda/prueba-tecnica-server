const express = require('express');
const router = express.Router();
const bancos = require('./bancos');

router.get('/', function (req, res, next) {
    try {
        res.send(bancos);
    }
    catch (error) {
        res.json([]);
    }
});

module.exports = router;
