const {Sequelize, DataTypes} =require('sequelize');
const path = require('path');
const fs = require('fs');


const conf = require('../configs/configs')

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(conf.DB_NAME, conf.DB_USER, conf.DB_PASSWORD, {
            host: 'localhost',
            dialect: 'mysql'
        })

        let models = {}

        function getModel() {
            fs.readdir(path.join(process.cwd(), 'database', 'model'), (err, files) => {
                files.forEach( file => {
                    const [modelName] = file.split('.')
                    models[modelName] = (require(path.join(process.cwd(),'database', 'model', modelName )))(client, DataTypes)
                })
            })
        }

        return {
            setModel: () => getModel(),
            getModels: (modelName) => models[modelName]
        }
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection()
            }
            return instance
        }
    }
})()
