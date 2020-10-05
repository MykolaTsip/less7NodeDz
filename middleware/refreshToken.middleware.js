const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../error')
const jwt = require('jsonwebtoken')

const conf = require('../configs/configs')
const constant = require('../configs/constants')

module.exports = (req, res, next) => {
    try {
        const token = req.get(constant.AUTHORIZATION)

        if (!token) {
            return next(new ErrorHandle(
                ErrorEnum.OLD_TOKEN.message,
                ErrorStatusEnum.OLD_TOKEN,
                ErrorEnum.OLD_TOKEN.customCode
            ))
        }

        jwt.verify(token, conf.REFRESH_TOKEN_SECRET, err => {
            if (err) {
                return next(new ErrorHandle(
                    ErrorEnum.OLD_TOKEN.message,
                    ErrorStatusEnum.OLD_TOKEN,
                    ErrorEnum.OLD_TOKEN.customCode
                ))
            }
        })

        next()
    }
    catch (e) {
        next(e)
    }
}
