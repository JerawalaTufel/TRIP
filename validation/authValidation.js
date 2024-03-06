const Joi = require("joi")
const { ROLE } = require("../services/Constant");
const Response = require("../services/Response");
const Helper = require("../services/Helper");

module.exports = {
    registerValidation : (req ,res , cb) => {
        const registerSchema = Joi.object({
            name: Joi.string().max(50).required(),
            email : Joi.string().email().required(),
            password : Joi.string()
            .min(8) // Minimum length of 8 characters
            .max(30) // Maximum length of 30 characters
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/) // Requires at least one lowercase letter, one uppercase letter, and one digit
            .required(),
            role : Joi.string().valid(ROLE.user , ROLE.driver).required()
        });

        const {error} = registerSchema.validate(req);
        if(error) {
            return Response.validationErrorResponseData(
                res,
                res.__(Helper.validationMessageKey('registerValidation',error))
            )
        } 
        return cb(true);
    }
}