const {ErrorHandle, ErrorEnum, ErrorStatusEnum} = require('../error')
const {userService} = require('../services')


module.exports = async (req, res, next) => {
    try {
        const {name} = req.body

        let user = await userService.findByName({name})

        if (!user) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_FOUND_USER,
                ErrorStatusEnum.NOT_VALID_USER,
                ErrorEnum.NOT_FOUND_USER.customCode
            ))
        }

        req.user = user

        next()
    }
    catch (e) {
        next(e)
    }
}
