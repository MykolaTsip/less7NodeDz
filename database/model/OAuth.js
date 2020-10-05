const db_name = require('../../configs/db_name')
const path = require('path')

module.exports = (sequelize, Datatypes) => {
    const  OAuth = sequelize.define('OAuth', {
            id: {
                type: Datatypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
        access_token: {
                type: Datatypes.STRING,
            allowNull: false
        },
        refresh_token: {
                type: Datatypes.STRING

        },
        user_id: {
                type: Datatypes.INTEGER,
            foreignKey: true,
        },
        created_at: {
                type: Datatypes.STRING,
            default: new Date().toISOString()
        }
        },
        {
            tableName: db_name.OAuth,
            timestamps: false
        })

    const User = (require(path.join(process.cwd(),'database', 'model', 'User' )))(sequelize, Datatypes)
   OAuth.belongsTo(User, {foreignKey: 'user_id'})

    return OAuth
}
