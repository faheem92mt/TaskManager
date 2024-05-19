const mongoose = require('mongoose')


const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"please enter name & try again"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task