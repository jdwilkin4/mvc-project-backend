require('dotenv').config();
const port = process.env.PORT || 8000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mongoUri = process.env.MONGO_URI;
const users = require('./routes/coach');
const applications = require('./routes/missing-apps');
const backgroundChecks = require('./routes/background-checks');
const covidTests = require('./routes/covid-tests');
const tbTests = require('./routes/tb-tests');
const cookieParser = require('cookie-parser');
const cors = require('cors');

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });

// check for proper connection
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error: '));
database.once('open', () => {
    console.log('mongo database connected')
});


//middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//routes
app.use(users);
app.use(applications);
app.use(backgroundChecks);
app.use(covidTests);
app.use(tbTests);

//create homepage
app.get("/", (req, res) => {
    res.send('This is the homepage')
})

app.listen(port, () => {
    console.log(`Backend server started at port: ${port}`)
});

