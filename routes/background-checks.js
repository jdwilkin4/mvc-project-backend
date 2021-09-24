const express = require('express');
const router = express.Router();
const Coach = require('../models/coach');
const { backgroundChecks } = require('../controllers/background-checks');

//this is for the coaches with missing background checks 
router.get('/missingbackground', (req, res) => {
    Coach.find({ backgroundCheck: false }, (err, data) => {
        err ? console.log(`Error loading data: ${err}`) : res.json(data)
    })
});

//this is for the nodemailer post request
router.post('/backgroundchecks', backgroundChecks)

module.exports = router;