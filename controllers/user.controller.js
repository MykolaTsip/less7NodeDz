const {userService, OAuthService} = require('../services')
const {passHesh, passCompare, tokinazer} = require('../helper')
const conf = require('../configs/constants')

module.exports = {
    AllUsers: async (req, res) => {
        try {
            let users = await userService.allUser()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    },
    NewUser: async (req, res) => {
        try {
            let user = req.body
            user.password = await passHesh(req.body.password)
            let Newuser = await userService.newUser(user)

            res.json(Newuser)
        } catch (e) {
            console.log(e)
        }
    },
    Login: async (req, res, next) => {
        try {
            const user = req.body
            const {password} = req.user

          await   passCompare(password, user.password)
            const tokens = await tokinazer()

           await OAuthService.createToken({
                ...tokens,
                user_id: user.id
            })

            res.json(tokens)
        } catch (e) {
            next(e)
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const user = req.body
         const oldToken = req.get(conf.AUTHORIZATION)
            const newToken = await tokinazer()

            OAuthService.deleteByParams({refresh_token: oldToken})

            OAuthService.createToken({
                ...newToken,
                user_id: user.id
            })

            res.json(newToken)
        }
        catch (e) {
            next(e)
        }

    }
}
