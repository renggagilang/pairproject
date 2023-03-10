const { Category,Course,UserCourse } = require('../models')

class CategoryController {
    static addCourse(req, res) {
      const{id} = req.params
      const{UserId} = req.body
        Course.create({order: [['title', 'ASC']]})
            .then(data => res.render('showListCategory', {data}))
            .catch(err => res.render(err))
    }
    
}

module.exports = CategoryController