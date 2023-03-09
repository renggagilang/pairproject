const { User, Course ,Category ,UserCourse} = require('../models')

class UserController {
  static showUser(req, res) {
    User.findAll({ order: [['username', 'ASC']]})
      // res.render('user')
      .then(data => res.render('showListStudent', {data}))
      .catch(err => res.render(err))
  }
}

module.exports = UserController