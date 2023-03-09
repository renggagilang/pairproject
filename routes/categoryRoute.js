const router = require('express').Router()
const CategoryController = require('../controllers/categoryController.js')

router.get('/', CategoryController.showAllCategory)
router.get('/:id', CategoryController.showAllCategoryCourse)

module.exports = router