const models = require('../models/jobAppModel')

const jobAppController = {};

jobAppController.getAllApplications = (req, res, next) => {
 
}

jobAppController.getApplication = (req, res, next) => {

}

jobAppController.createApplication = async (req, res, next) => {
    try {
        console.log('hello world')
        console.log(req.body)
        const {role, company, url, app_deadline, salary, location, date_applied, notes, status} = req.body; // TODO: add date_applied & notes later

        const newApp = await models.Application.create({role, company, url, app_deadline, salary, location, date_applied, notes, status});
        res.locals.newApp = newApp;
        return next();

    } catch(err) {
        const errObj = {
            log: `jobAppController.createApplication Error: ${err}`,
            status: 404,
            message: {err: 'Error: jobAppController.createApplication'}
        }
    }
}

jobAppController.deleteApplication = (req, res, next) => {

}

module.exports = jobAppController;