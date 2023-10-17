const express = require('express');

const jobAppController = require('../controllers/jobAppController');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(res.locals.applications);
})

router.post('/application', jobAppController.createApplication, (req, res) => {
    res.status(200).send('Successfully added new application')
})