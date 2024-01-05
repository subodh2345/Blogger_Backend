const Joi = require('joi');

function createUserSchema(req, res, next){
    const schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required().email(),   
        phone: Joi.number().integer().required(),
        password: Joi.string().required(),
    });
    validateRequest(req, res, next, schema);
}

function validateRequest(req, res, next, schema) {
    const options ={
        abortEarly: false, //include all errors
        allowUnknown: true, //ignore unknown props
        stripUnknown: true, //remove unknown props
    };
    const { error, value } = schema.validate(req.body,options);
    if(error) {
        // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
        res.send(error);
    } else {
        req.body = value;
        next();
    }
} 
   
  module.exports = {createUserSchema}  