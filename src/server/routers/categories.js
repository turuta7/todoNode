import express from 'express'
const router = express.Router()

import controller from '../controllers/categories.js'

router.get('/categories', controller.getAll);
router.post('/categories', controller.create);
router.delete('/categories/:id', controller.deleteCategory);

export default router