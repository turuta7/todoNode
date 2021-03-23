import express from 'express'
import controller from '../controllers/tasks.js'

const router = express.Router()

router.get('/tasks', controller.getAll);
router.post('/tasksCreate', controller.create);

//delete task
router.post('/task', controller.deleteTask);

//put task
router.post('/task/put', controller.putTask);

export default router
