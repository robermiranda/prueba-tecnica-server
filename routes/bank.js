const axios = require('axios');
const express = require('express');
const router = express.Router();
const URL = 'https://dev.obtenmas.com/catom/api/challenge/banks';

router.get('/', function (req, res, next) {
    axios.get(URL)
    .then(list => {
        //res.send(`bank list size: ${list.data.length}`);
        res.json(list.data);
    })
    .catch(error => {
        const msg = 'ERROR WHILE GETTING BANK LIST';
        console.error(msg, error.mesage);
        res.send(msg);
    });
});

module.exports = router;
