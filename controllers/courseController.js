const { Course ,Category} = require('../models')
const {Op} = require('sequelize')

class CourseController {
  static showAllCourse(req, res) {
    const { q } = req.query

    const where = q ? { title: { [Op.like]: `%${q}%` } } : {};

    Course.findAll({
      include:{
        model: Category,
      },
      where,
      order: [['CategoryId', 'ASC']],
    })
    .then(data => res.render('showListAllCourse', {data}))
    .catch(err => res.render(err))
  }

  static deleteCourse(req, res) {
    const id = parseInt(req.params.id);

    Course.destroy({
      where: { id },
    })
      .then(() => res.redirect('/course'))
      .catch((err) => res.send(err))
}

  
  
  static addFormCourse(req, res) {
    res.render('addFormCourse')
  }

  static postFormCourse(req, res) {
    // res.render('addFormCourse')
    const {title,duration,description,CategoryId} = req.body
    Course.create({title,duration,description,CategoryId})
    .then (()=>{
      res.redirect(`/course`)
      // res.send(data)
    })
    .catch(err=>{
      let error = err
      // let error = err.errors.map(el=>el.message)
      // res.redirect(`/course/add?error=${error}`)
      res.send(err)
    } );
  }
}

module.exports = CourseController