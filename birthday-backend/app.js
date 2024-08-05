const express = require('express')
const cors = require('cors');
const connectToMongodb = require('./db')
const app = express()
require('./cron');
const userRoute = require('./Routes/userRoute')
require('dotenv').config()
const PORT = process.env.PORT || 8000
connectToMongodb()
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Welcome')
})
app.use('/', userRoute )
    



app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})