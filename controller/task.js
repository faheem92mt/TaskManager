const Task = require('../model/task')

const getAllTasks = async (req,res) => {
    try {
        
        // this is a filter
        
        // const tasks = await Task.find({completed: true})
        // next project will have deep dive on filtering/sorting

        // this is without filters
        const tasks = await Task.find({})
        
        // res.status(200).send({tasks})
        // res.status(200).send({ tasks, noOfHits: tasks.length })
        res.status(200).send({ status: "success", data: {tasks, noOfHits: tasks.length} })

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
        // this is from url
        const {id} = req.params
        // find the entry from db where the _id matches with the one in url (i.e. id)
        const task = await Task.findOne({_id:id})
        
        if(!task) {
            return res.status(404).json({msg: `No task with id : ${id}`})
        }

        res.status(200).json({task})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
    // res.json({id: req.params.id})
}

const updateTask = async (req,res) => {
    try {
        const {id} = req.params
        // 3rd parameter - options => to make sure we can't add empty names 
        // (we do this by using validators)
        // & to show the latest update immediately which wasn't the case at first
        const task = await Task.findOneAndUpdate({_id:id},req.body,{
            new: true,
            runValidators: true,
            overwrite: true
        })
        if (!task) {
            return res.status(404).json({msg: `No task with id : ${id}`})
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    // res.send('update task')
}

const editTask = async (req,res) => {
    try {

        const {id} = req.params
        // 3rd parameter - options => to make sure we can't add empty names 
        // (we do this by using validators)
        // & to show the latest update immediately which wasn't the case at first
        const task = await Task.findOneAndUpdate({_id:id},req.body,{
            new: true,
            runValidators: true,
            overwrite: true
        })

        if (!task) {
            return res.status(404).json({msg: `No task with id : ${id}`})
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
    // res.send('update task')
}

const deleteTask = async (req,res) => {
    try {
        const {id} = req.params
        const task = await Task.findOneAndDelete({_id:id})
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${id}`})
        }
        // few options 

        // res.status(200).json({task: null, status: 'success'})
        // res.status(200).send() 
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
    deleteTask,
    editTask
}