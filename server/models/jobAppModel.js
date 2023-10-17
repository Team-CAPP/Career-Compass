const mongoose = require('mongoose');

require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;