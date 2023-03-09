const { Category,Course } = require('../models')

class CategoryController {
    static showAllCategory(req, res) {
        Category.findAll({order: [['title', 'ASC']]})
            .then(data => res.render('showListCategory', {data}))
            .catch(err => res.render(err))
    }
    static showAllCategoryCourse(req, res) {
        const {id} = req.params
        Category.findByPk(id,{
            include:{
                model: Course,
              },
              order: [['title', 'ASC']]})
            .then(data =>{
                res.render('showListCourse', {data})
                // res.send(data)
            } )
            .catch(err => res.render(err))
    }
}

module.exports = CategoryController