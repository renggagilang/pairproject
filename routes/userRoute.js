const router = require('express').Router()
const UserController = require('../controllers/userController.js')

router.get('/', UserController.showUser)
router.get('/:id/detail', UserController.detailStudent)
router.post('/:id/update', UserController.updateStudent)
router.post('/:id/add', UserController.addStudent)

module.exports = router