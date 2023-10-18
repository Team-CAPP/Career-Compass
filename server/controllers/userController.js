const models = require('../models/userModel');
const bcrypt = require('bcrypt')

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
        console.log('hi from createUser')
        const { username, password, email } = req.body;

        const hash = await bcrypt.hash(password, 10);

        const newUser = await models.User.create({ username, password: hash, email })
        // res.locals.newUser = newUser;
        console.log(newUser);
        return next();
    } catch (err) {
        const errObj = {
            log: `userController.createUser Error: ${err}`,
            status: 404,
            message: { err: 'Error: userController.createUser' }
        }
    }
}

module.exports = userController;