'use strict';

const { users } = require('../models')

module.exports = async (req, res, next) => {

  try {

    if (!req.headers.authorization) { _authError() }

    const token = req.headers.authorization.split(' ').pop();
    console.log(token)
    const validuser = await users.model.authenticateToken(token);
    req.user = validuser;
    req.token = validuser.token;
    next();

  } catch (e) {
    _authError();
  }

  function _authError() {
    next('Invalid Login');
  }
}