const oauth = require('../database').getInstance()


module.exports = {

    getByParams: (params) => {
        const OAuth = oauth.getModels('OAuth')
        const user = oauth.getModels('User')

        return OAuth.findOne({
            where: params,
            include: [user]
        })
    },
    createToken: (tokenObj) => {
        const  OAuth = oauth.getModels('OAuth')

        return OAuth.create(tokenObj, {new: true})
    },
    deleteByParams: (params) => {
        const OAuth = oauth.getModels('OAuth')

        return OAuth.destroy({
            where: params
        })
    }
}
