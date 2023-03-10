const { Course ,Category} = require('../models')
const formatedDay = require("../helper/formtedDay")
const {Op} = require('sequelize')

class CourseController {
  static showAllCourse(req, res) {
    const { q } = req.query

    const where = q ? { title: { [Op.iLike]: `%${q}%` } } : {};
    Course.findAll({
      include:{
        model: Category,
      },
      where,
      order: [['CategoryId', 'ASC']],
    })
    .then(data => res.render('showListAllCourse', {data,formatedDay}))
    .catch(err => res.render(err))
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

  static deleteCourse(req, res) {
    Course.destroy({where: {id: req.params.id}})
        .then(() => res.redirect('/course'))
        .catch(err => res.render('errors', {err}))
}

static detailCourse(req, res) {
  const {id}= req.params
  Course.findByPk(id,{
    include:{
      model: Category,
    },
  
  })
  .then(data => res.render('detailCourse', {data,formatedDay}))
  .catch(err => res.render(err))
}
static addFormCourse(req, res) {
  res.render('addFormCourse')
}



}

module.exports = CourseController