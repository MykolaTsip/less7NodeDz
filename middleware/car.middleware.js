const {carValid} = require('../validators')
const {ErrorHandle, ErrorEnum, ErrorStatusEnum} = require('../error')

module.exports = (req, res, next) => {
    try {
        const car = req.body
        console.log(car)
        const {error} = carValid.validate(car)
        console.log(error)
        if (error) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_CAR.message,
                ErrorStatusEnum.NOT_VALID_CAR,
                ErrorEnum.NOT_VALID_CAR.customCode
            ))
        }

        next()

    } catch (e) {
        next(e)
    }
}
