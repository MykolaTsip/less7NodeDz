const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../error')
const jwt = require('jsonwebtoken')
const {OAuthService} = require('../services')

const conf = require('../configs/configs')
const constant = require('../configs/constants')

module.exports = async (req, res, next) => {
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

        const tokens = await OAuthService.getByParams({refresh_token: token})

        if (!tokens) {
            return next(new ErrorHandle(
                ErrorEnum.OLD_TOKEN.message,
                ErrorStatusEnum.OLD_TOKEN,
                ErrorEnum.OLD_TOKEN.customCode
            ))
        }

        req.user = tokens.User

        next()
    }
    catch (e) {
        next(e)
    }
}
