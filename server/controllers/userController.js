const { User } = require('../models/userModel');
const { Session } = require('../models/sessionModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log('hi from createUser');
    const { username, password, email } = req.body;
    if (!username || !password) {
      return next({
        log: 'Missing username or password in userController.createUser',
        status: 400,
        message: { err: 'An error ocurred' },
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hash, email });
    res.locals.user = user._id;
    return next();
  } catch (err) {
    const errObj = {
      log: `userController.createUser Error: ${err}`,
      status: 404,
      message: { err: 'An error ocurred' },
    };
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log('hello from verify User');
    if (!username || !password) {
      return next({
        log: 'Missing username or password in userController.createUser',
        status: 400,
        message: { err: 'An error ocurred' },
      });
    }
    const user = await User.findOne({ username });
    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      res.sent('username or password is incorrect');
    }
    console.log('user was found with hashed password');
    res.locals.user = user._id;
    console.log(typeof res.locals.user);
    return next();
  } catch (err) {
    const errObj = {
      log: `userController.verifyUser Error: ${err}`,
      status: 500,
      message: { err: 'An error occurred' },
    };
  }
  return next();
};

userController.startSession = async (req, res, next) => {
  try {
    console.log('hello from start session');
    await Session.create({ cookieId: res.locals.user });
    return next();
  } catch (err) {
    return next({
      log: `userController.startSession Error: ${err}`,
      status: 500,
      message: { err: 'An error ocurred' },
    });
    console.log('session created');
  }
};

userController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.user, { httpOnly: true });
  console.log('cookie ssid passed');
  return next();
};

module.exports = userController;
