const router = require('express').Router()
const Controller = require('../controllers/homepageController.js')

router.get('/', Controller.showHomepage)

module.exports = router