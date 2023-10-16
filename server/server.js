const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// handle parsing request body;
app.use(express.json());

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