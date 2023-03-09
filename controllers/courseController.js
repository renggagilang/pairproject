const { Course ,Category} = require('../models')

class CourseController {
  static showAllCourse(req, res) {
    Course.findAll({
      include:{
        model: Category,
      },
      order: [['title', 'ASC']],
    })
    .then(data => res.render('showListCourse', {data}))
    .catch(err => res.render(err))
  }
}

module.exports = CourseController