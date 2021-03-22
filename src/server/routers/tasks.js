import express from 'express'
const router = express.Router()

import controller from '../controllers/tasks.js'

router.get('/tasks', controller.getAll);
router.post('/tasks', controller.create);

//delete task
router.post('/task', controller.deleteTask);

export default router