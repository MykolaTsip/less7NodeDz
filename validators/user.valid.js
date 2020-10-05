const Joi = require('joi')

module.exports = Joi.object().keys({
    name: Joi.string().min(3).max(50).trim().required(),
    password: Joi.string().min(5).max(50).trim().required()
})
