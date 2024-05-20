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
        res.status(201).send({task})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    // res.json({id: req.params.id})
}

const updateTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body)
        if (!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    // res.send('update task')
}

const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
    // res.send('delete task')
}

// const updateTask = async (req,res) => {
//     try {
//         const {id} = req.params
//         const task = Task.findByIdAndUpdate(id,req.body)
//         const updatedTask = Task.findById(id)
//         res.status(200).send({updateTask})
//     } catch (error) {
//         res.status(404).send({message: error.message})
//     }
// }

// const deleteTask = async (req,res) => {
//     try {
//         const {id:taskID} = req.params
//         const task = Task.findOneAndDelete({_id:taskID})
//         if(!task) {
//             return res.status(404).json({msg: `No task with id: ${taskID}`})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         res.status(404).send({message: error.message})
//     }
// }

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}