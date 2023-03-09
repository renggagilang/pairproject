const { Category } = require('../models')

class CategoryController {
    static showAllCategory(req, res) {
        Category.findAll({order: [['title', 'ASC']]})
            .then(data => res.render('showListCategory', {data}))
            .catch(err => res.render(err))
    }
}

module.exports = CategoryController