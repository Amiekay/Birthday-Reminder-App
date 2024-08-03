const express = require('express')
const connectToMongodb = require('./db')
const app = express()
const userRoute = require('./Routes/userRoute')
require('dotenv').config()
const PORT = process.env.PORT || 8000
connectToMongodb()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome')
})
app.use('/', userRoute )
    



app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})