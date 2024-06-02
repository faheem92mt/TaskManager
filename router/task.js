const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controller/task')

router.route('/').get(getAllTasks).post(createTask)
// router.route('/:id').patch(updateTask).delete(deleteTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router