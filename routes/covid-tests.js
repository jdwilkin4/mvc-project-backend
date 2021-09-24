const express = require('express');
const router = express.Router();
const Coach = require('../models/coach');
const { covidTests } = require('../controllers/covid-tests');


//this is for the coaches with missing covid tests 
router.get('/missingcovid', (req, res) => {
    Coach.find({ covidTest: false }, (err, data) => {
        err ? console.log(`Error loading data: ${err}`) : res.json(data)
    })
});

//this is for the nodemailer post request
router.post('/covidtests', covidTests)

module.exports = router;