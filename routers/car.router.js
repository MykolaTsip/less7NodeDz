const {Router} = require('express')
const {carController} = require('../controllers')
const {carMiddleware, accessToken} = require('../middleware')

const carRouter = Router();

carRouter.get('/', carController.AllCar)
carRouter.post('/new', accessToken, carMiddleware, carController.NewCar)


module.exports = carRouter
