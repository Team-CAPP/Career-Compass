const { Application } = require('../models/jobAppModel')
const { User } = require('../models/userModel')

const jobAppController = {};

jobAppController.getAllApplications = async (req, res, next) => {
    try {
        const { ssid } = req.cookies;

        const userApplications = await Application.find({ user_id: ssid });
        res.locals.userApplications = userApplications;
        console.log(res.locals.userApplications)
        return next();
    } catch (err) {
        const errObj = {
            log: `jobAppController.getAllApplications Error: ${err}`,
            status: 404,
            message: { err: 'Error: jobAppController.getAllApplications' }
        }
    }
}

jobAppController.getApplication = (req, res, next) => {

}

jobAppController.createApplication = async (req, res, next) => {
    try {
        // TODO: add date_applied & notes later
        const { ssid } = req.cookies;
        console.log(ssid)
        const { role, company, url, app_deadline, salary, location, date_applied, notes, status } = req.body;
        console.log(req.body)
        const newApp = await Application.create({ user_id: ssid, role, company, url, app_deadline, salary, location, date_applied, notes, status });
        res.locals.newApp = newApp;
        return next();
    } catch (err) {
        const errObj = {
            log: `jobAppController.createApplication Error: ${err}`,
            status: 404,
            message: { err: 'Error: jobAppController.createApplication' }
        }
    }
}

jobAppController.deleteApplication = (req, res, next) => {

}

module.exports = jobAppController;