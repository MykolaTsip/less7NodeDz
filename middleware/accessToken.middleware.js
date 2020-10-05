const jwt = require('jsonwebtoken')
const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../error')

const conf = require('../configs/configs')
const constant = require('../configs/constants')

module.exports = (req, res, next) => {
    try {
        const token = req.get(constant.AUTHORIZATION)

        if (!token) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_TOKEN.message,
                ErrorStatusEnum.NOT_VALID_TOKEN,
                ErrorEnum.NOT_VALID_TOKEN.customCode
            ))
        }

        jwt.verify(token, conf.ACCESS_TOKEN_SECRET, err => {
            if (err) {
                return next(new ErrorHandle(
                    'token not valid',
                    ErrorStatusEnum.NOT_VALID_TOKEN,
                    ErrorEnum.NOT_VALID_TOKEN.customCode
                ))
            }
        })

        next()

    } catch (e) {
        next(e)
    }


}
