const models = require('../models/userModel');
const bcrypt = require('bcrypt')

const userController = {};

userController.createUser = async (req, res, next) => {
    try {
        console.log('hi from createUser')
        const { username, password, email } = req.body;

        if (!username || !password) {
            return next({
                log: 'Missing username or password in userController.createUser',
                status: 400,
                message: { err: 'An error ocurred' },
            });
        }

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