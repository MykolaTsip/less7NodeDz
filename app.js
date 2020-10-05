const express = require('express')
const {carRouter, userRouter} = require('./routers')
const instance = require('./database').getInstance()
instance.setModel()

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.json())

server.use('/cars', carRouter)
server.use('/users', userRouter)

server.use('*', (err, req, res, next) => {
    res.status(err.status | 505)
        .json({
            message: err.message,
            code: err.customCode
        })
})

server.listen(5002, (e) => {
    if (e) {
        console.log(e)
    }

    console.log('host 5002 is work!')
})
