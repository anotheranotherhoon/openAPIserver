const express = require('express')
const app = express()
const cors = require('cors')
const restaurantData = require('./restaurantData')
const festivalData = require('./festivalData')
const PORT = 8000
app.use(cors())

app.get('/restaurant', async(req, res)=> {
    await restaurantData(undefined, (error,data)=>{
        if(error){
            res.send(error)
        }
        res.send(data)
    })
})

app.get('/festival', async(req, res)=> {
    await festivalData(undefined, (error,data)=>{
        if(error){
            res.send(error)
        }
        console.log(data)
        res.send(data)
    })
})

app.listen(PORT,() => {
    console.log(`The server is running at the port ${PORT}`)
})