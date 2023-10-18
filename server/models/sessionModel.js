const mongoose = require('mongoose');

// require('dotenv').config();

// const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI)
//     .then(() => console.log('Connected to MongoDB.'))
//     .catch(err => console.log(err));

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieId: {type: String, required: true, unique: true},
    createdAt: {type: Date, expiresAfterSeconds: 900, default: Date.now},
    email: String,
})

const Session = mongoose.model('session', sessionSchema)

module.exports = { Session };