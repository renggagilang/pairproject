const router = require('express').Router()
const CourseController = require('../controllers/courseController.js')

router.get('/', CourseController.showAllCourse)

module.exports = router