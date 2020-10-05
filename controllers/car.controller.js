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

            const {body, user} = req

            let newCar = await carService.newCar({...body, user_id: user.id})
            res.json(newCar)
        }
        catch (e) {
            console.log(e)
        }
    }
}
