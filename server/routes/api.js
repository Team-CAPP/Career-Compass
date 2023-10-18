const express = require('express');
const path = require('path');
// const fs = require('fs')

const jobAppController = require('../controllers/jobAppController');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post(
  '/createuser',
  userController.createUser,
  userController.startSession,
  userController.setSSIDCookie,
  (req, res) => {
    res.status(200).send('New user created');
  },
);

router.post(
  '/login',
  userController.verifyUser,
  userController.startSession,
  userController.setSSIDCookie,
  (req, res) => {
    res.status(200).send('User logged in');
  },
);

router.get('/', jobAppController.getAllApplications, (req, res) => {
  res.status(200).json(res.locals.applications);
});

// router.get('/application', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/AppForm'));
// })

router.post('/application', jobAppController.createApplication, (req, res) => {
  res.status(200).send(res.locals.newApp);
});

module.exports = router;
