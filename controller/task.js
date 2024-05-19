const Task = require('../model/task')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).send({tasks})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

const createTask = async (req,res) => {
    try {
        const task = Task.create(req.body)
        res.status(200).send({task})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

const updateTask = async (req,res) => {
    try {
        const {id} = req.params
        const task = Task.findByIdAndUpdate(id,req.body)
        const updatedTask = Task.findById(id)
        res.status(200).send({updateTask})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

const deleteTask = async (req,res) => {
    try {
        const {id} = req.params
        const task = Task.findByIdAndDelete(id)
        res.status(200).send({message: "deleted successfully"})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

module.exports = {
    getAllTasks,
    createTask
}