const Joi = require('joi')

module.exports = Joi.object().keys({
    idcars: Joi.number(),
    model: Joi.string().alphanum().trim().min(3).max(50).required(),
    year: Joi.number(),
    price: Joi.number().required()
})
