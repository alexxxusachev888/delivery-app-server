const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next)=> {

      if(Object.keys(req.body).length === 0) {
        next(HttpError(400, "missing fields"));
      }

      const {error} = schema.validate(req.body);
      
      if (error) {
        const validationErrors = error.details.map(detail => detail.message);
        next(HttpError(400, `${validationErrors.join(', ')}`));
      }
      else {
        next();
    }
  }
  return func;
}

module.exports = {
  validateBody, 
};