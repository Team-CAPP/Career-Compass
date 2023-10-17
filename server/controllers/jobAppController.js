const models = require('../models/jobAppModel')

const jobAppController = {};

jobAppController.getAllApplications = (req, res, next) => {
 
}

jobAppController.getApplication = (req, res, next) => {

}

jobAppController.createApplication = async (req, res, next) => {
    try {
        const {role, company, url, app_deadline, salary, location, data_applied_notes } = req.body;

        await models.Application.create({role, company, url, app_deadline, salary, location, data_applied_notes});

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