const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

// set a schema for the 'applications' collection
const applicationSchema = new Schema({
    role: { type: String, required: true },
    company: { type: String, required: true },
    url: String,
    app_deadline: { type: String},
    salary: String,
    location: String,
    date_applied: { type: String },
    notes: String,
    status: String,
    follow_ups: [{ type: Schema.Types.ObjectId, ref: 'followup' }],
    contacts: [{ type: Schema.Types.ObjectId, ref: 'contact' }],
    interviews: [{ type: Schema.Types.ObjectId, ref: 'interview' }],
    negotiation: [{ type: Schema.Types.ObjectId, ref: 'negotiation' }]

})

const Application = mongoose.model('application', applicationSchema);

const contactSchema = new Schema({
    name: { type: String, required: true },
    phone_number: String,
    email: String,
    note: String,
})

const Contact = mongoose.model('contact', contactSchema);

const interviewSchema = new Schema({
    date: { type: Date, required: true },
    note: String,
    type_of_interview: { type: String, required: true },
    location: String,
    self_reflection: String,
})

const Interview = mongoose.model('interview', interviewSchema);

const followUpSchema = new Schema({
    date: { type: Date, required: true },
    note: String,
})

const FollowUp = mongoose.model('followup', followUpSchema);

const negotiationSchema = new Schema({
    offer_details: { type: String, required: true },
    counteroffer_details: String,
    result: String
})

const Negotiation = mongoose.model('negotiation', negotiationSchema);



module.exports = {
    Application,
    Contact,
    Interview,
    FollowUp,
    Negotiation
};