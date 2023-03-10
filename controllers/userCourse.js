const { Category,Course,UserCourse,User } = require('../models')

class UserCourseController {

  static getaddCourse(req,res){
    const {id} = req.params
    User.findAll()
    .then(data => res.render("addUserCourse",{data,id}))
    .catch(err => res.send(err))
   
  }

    static postaddCourse(req, res) {
      const{id} = req.params
      const{UserId,role} = req.body
      console.log(id,UserId)
        UserCourse.create({
          CourseId:id,
          UserId:UserId,
          role,
        })
            .then(data => res.redirect("/user"))
            .catch(err => res.send(err))
    }
    
}

module.exports = UserCourseController