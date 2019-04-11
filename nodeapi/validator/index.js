createPostValidator = (req, res, next) => {
  //Title
  req.check("title", "Write the title").notEmpty();
  req.check("title", "Title must be 4 to 150 characters").isLength({
    min: 4,
    max: 150
  });

  //body
  req.check("body", "Write the body").notEmpty();
  req.check("body", "body must be 4 to 2000 characters").isLength({
    min: 4,
    max: 2000
  });

  //check for errors
  const errors = req.validationErrors();
  //if errors show retrun first one as they appear
  if (errors){
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({
      error: firstError
    });
  }

  //move on to next middleware
  next()
};

signupValidator = (req, res, next) => {
  //check for name
  req.check("name", "write your name").notEmpty();
  req.check("name")
  .isLength({min: 4})
  .withMessage("Name should be atleast 4 characters")

  //check for email
  req.check("email")
  .matches(/\S+@\S+\.\S+/)
  .withMessage("Type correct email!")
  .isLength({
    min: 4,
    max: 3000
  })
  .withMessage("email should be min 4 and max 3000 characters long!")

  //check for password
  req.check("password")
  .isLength({min: 6})
  .withMessage("Password should have minimum 6 characters")
  .matches(/\d/)
  .withMessage("Password should contain atleast a number")

  //check for errors
  const errors = req.validationErrors()
  if(errors) {
    const firstError = errors.map(error => error.msg)[0];
    return res.status(400).json({
      error: firstError
    })
  }
  //move to next middleware
  next()
}

module.exports = {
  createPostValidator,
  signupValidator
};
