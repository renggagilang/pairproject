const router = require('express').Router()
const homepageRouter = require('./homepageRoute.js')
const categoryRouter = require('./categoryRoute.js')
const courseRouter = require('./courseRoute.js')
const userRouter = require('./userRoute.js')
const UserCourseController = require('../controllers/userCourse.js')

router.use('/', homepageRouter)
router.use('/category', categoryRouter)
router.use('/course', courseRouter)
router.use('/user', userRouter)

router.get('/userCourse/:id/add',UserCourseController.getaddCourse)
router.post('/userCourse/:id/add',UserCourseController.postaddCourse)

module.exports = router