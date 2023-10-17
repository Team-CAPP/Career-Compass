const express = require('express');
const path = require('path');
// const fs = require('fs')

const jobAppController = require('../controllers/jobAppController');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(res.locals.applications);
})

// router.get('/application', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/AppForm'));
// })

router.post('/application', jobAppController.createApplication, (req, res) => {
    res.status(200).send(res.locals.newApp)
})

module.exports = router;