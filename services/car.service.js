const model = require('../database').getInstance()

module.exports = {
    allCars: async () => {
        const cars = model.getModels('Car')
        return cars.findAll({})
    },
    newCar: async (newCar) => {
        const car = model.getModels('Car')
        return car.create(newCar, {new: true})
    }
    }

