const {carService} = require('../services');


module.exports = {
    AllCar: async (req, res) => {
try {
    let car = await carService.allCars()
    res.json(car)
}
catch (e) {
    console.log(e)
}
    },
    NewCar: async (req, res) => {
        try {
            let newCar = await carService.newCar(req.body)
            res.json(newCar)
        }
        catch (e) {
            console.log(e)
        }
    }
}
