const oauth = require('../database').getInstance()


module.exports = {

    getByParams: (params, userAttr) => {
        const OAuth = oauth.getModels('OAuth')
        const user = oauth.getModels('User')

        return OAuth.findOne({
            where: params,
            raw: true,
            nest: true,
            include: [{
                model: user,
                attributes: userAttr
            }]
        })
    },
    createToken: (tokenObj) => {
        try {
        const  OAuth = oauth.getModels('OAuth')

        return OAuth.create(tokenObj, {new: true})
        }
        catch (e) {
            console.log(e)
        }
    },
    deleteByParams: (params) => {
        try {
        const OAuth = oauth.getModels('OAuth')

        return OAuth.destroy({
            where: params
        })

        }
        catch (e) {
            console.log(e)
        }
    }
}
