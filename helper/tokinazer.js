const jwt = require('jsonwebtoken')
const cofg = require('../configs/configs')

module.exports = () => {
        const access_token = jwt.sign({a: 'abc'}, cofg.ACCESS_TOKEN_SECRET, {expiresIn: '1m'})
        const refresh_token = jwt.sign({}, cofg.REFRESH_TOKEN_SECRET, {expiresIn: '14d'})

        return {
            access_token,
            refresh_token
        }

}
