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

module.exports = {
  createPostValidator
};
