const express = require('express')
const app = express()

// importing router
const router = require('./router/task')

const connectDB = require('./db/connect')
require('dotenv').config()

// UI
app.use(express.static('./public'))
// for parsing json while sending data to DB
app.use(express.json())
// using router as middleware
app.use('/api/v1/tasks', router)

const port = 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        app.listen(port, ()=> {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
