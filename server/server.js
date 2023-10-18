const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const apiRouter = require('./routes/api');

const PORT = 3000;

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

// handle parsing request body;
app.use(express.json());
app.use(cookieParser());

// for environment production serve static files from dist
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.resolve(__dirname, '../dist')));
// }

app.use(express.static(path.resolve(__dirname, '../dist')));

// define route handlers
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page not found'));

// global error handler
app.use((err, res, req, next) => {
    const defaultError = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
    console.log(`Server listerning on port ${PORT}`)
});

module.exports = app;