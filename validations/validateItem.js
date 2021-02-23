const Joi = require("joi");
const validateRequest = require("./validateRequest");

function validateItem(req, res, next) {
    const schema = Joi.object({
        name: Joi.string().required()
    });
    validateRequest(req, res, next, schema);
}

module.exports = validateItem;
