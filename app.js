const express = require('express')
const app = express()

// UI
app.use(express.static('./public'))
// for parsing json while sending data to DB
app.use(express.json())

// Importing router
const router = require('./router/task')
// using router as middleware
app.use('/api/v1/tasks', router)

const notFound = require('./middleware/notFound')
app.use(notFound)

// Database
const connectDB = require('./db/connect')
require('dotenv').config()



const port = 3000

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
