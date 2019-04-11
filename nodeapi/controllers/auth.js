const User = require('../models/user');
const jwt = require('jsonwebtoken');

signup = async (req, res) => {
  const userExists = await User.findOne({email: req.body.email})
  if(userExists)
    return res.status(403).json({
    error: "Email is taken"
  })
  const user = await new User(req.body);
  await user.save();
  res.status(200).json({user});
};

signin = (req, res) => {
  //Find the user based on Email
  const { email, password } = req.body
  User.findOne({email}, (err, user) => {
    //if error or no user
    if (err || !user) {
      return res.status(400).json({
        error: "User with this email doesn't exist. Please signup."
      })
    }
    //if user, authenticate
    //create authenticate method if user exist
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password doesn't match."
      })
    }
    // generate a token with user id and secret
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    //persist the token as t in cokie with expirydate
    res.cookie("t", token, {expire: new Date() + 9999})
    //return response with user and token to frontend
    // const {_id, email, name} = user
    // return res.json({token, user: {_id, name, email}})
    //or directly return user array required fields as below
    return res.json({token, user: [user._id, user.name, user.email]})
  })
}

module.exports = {
  signup,
  signin
}
