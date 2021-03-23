import express from 'express'
import controller from '../controllers/categories.js'

const router = express.Router()

router.get('/categories', controller.getAll);
router.post('/addCategory', controller.create);

//sort
router.post('/sortCategory', controller.sortCategory)

//delete category
router.post('/deleteCategory', controller.deleteCategory)

export default router
