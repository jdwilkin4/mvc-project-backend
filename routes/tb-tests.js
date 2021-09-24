const express = require('express');
const router = express.Router();
const Coach = require('../models/coach');
const { tbTests } = require('../controllers/tb-tests');

//this is for the coaches with missing TB tests 
router.get('/missingtb', (req, res) => {
    Coach.find({ tbTest: false }, (err, data) => {
        err ? console.log(`Error loading data: ${err}`) : res.json(data)
    })
});

//this is for the nodemailer post request
router.post('/tbtests', tbTests)

module.exports = router;