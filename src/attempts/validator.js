const joi = require('joi');

module.exports = joi.object({
    username: joi.string().max(255).required(),
    password: joi.string().max(255).required()
});