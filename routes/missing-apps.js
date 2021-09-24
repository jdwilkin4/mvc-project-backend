const express = require('express');
const router = express.Router();
const Coach = require('../models/coach');
const { applications } = require('../controllers/applications');

//this is for the coaches with missing applications 
router.get('/missingapps', (req, res) => {
    Coach.find({ application: false }, (err, data) => {
        err ? console.log(`Error loading data: ${err}`) : res.json(data)
    })
});

//this is for the nodemailer post request
router.post('/applications', applications);

module.exports = router