const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Send All items')
})

module.exports = router;