const mongoose = require('mongoose');

// require('dotenv').config();

// const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI)
//     .then(() => console.log('Connected to MongoDB.'))
//     .catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    applications: [{ type: Schema.Types.ObjectId, ref: 'application' }]
})

const User = mongoose.model('user', userSchema)

module.exports = { User };