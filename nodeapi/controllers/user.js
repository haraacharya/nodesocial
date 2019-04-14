const User = require('../models/user');


userById = (req, res, next, id) => {
  User.findOne(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found!"
      })
    }
    res.profile = user  //Adds a new object named "profile" to req with user info
    next()
  })
}

hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized to perform this action!"
    })
  }
}

module.exports = {
  userById,
  hasAuthorization
}
