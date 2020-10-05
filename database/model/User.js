const conf = require('../../configs/db_name')

module.exports = (sequelize, Datatypes) => {
    const  User = sequelize.define('User', {
            id: {
                type: Datatypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false
            },
            password: {
                type: Datatypes.STRING,
                allowNull: false
            }
        },
        {
            tableName: conf.USERS,
            timestamps: false
        })
    return User
}
