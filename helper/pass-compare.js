const bcrypt = require('bcrypt')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../error')

module.exports = (pass, heshPass) => {
    const currentPass = bcrypt.compare(pass, heshPass)

    if (!currentPass) {
        throw new ErrorHandle(
            ErrorEnum.NOT_FOUND_USER.message,
            ErrorStatusEnum.NOT_VALID_USER,
            ErrorEnum.NOT_FOUND_USER.customCode
        )
    }

    return currentPass
}
