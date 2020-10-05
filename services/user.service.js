const modelBd = require('../database').getInstance()


module.exports = {
    allUser: async () => {
        let users = modelBd.getModels('User')
        return users.findAll({})

    },

    newUser: async (userObj) => {
        let newUser = modelBd.getModels('User')
        return newUser.create(userObj, {new: true})
    },
    findByName: async (obj) => {
        let fUser = modelBd.getModels('User')
        return fUser.findOne({
            where: obj
        })
    }


}
