const { User, Course ,Category ,UserCourse , Profile} = require('../models')

class UserController {
  static showUser(req, res) {
    User.findAll({ order: [['username', 'ASC']]})
      // res.render('user')
      .then(data => res.render('showListStudent', {data}))
      .catch(err => res.send(err))
  }









  
  static detailStudent(req, res) {
    const{id} = req.params
    // console.log(req.params)
    Profile.findOne({where:{UserId : +id}})
      // res.render('user')
      .then(data => {
        // res.send(data)
      if(!data){
        // res.send("data kosong")
        console.log({id},"<<<<<DDDd")
        res.render('addProfile',{id})
      }else {
         res.render('detailStudents', {data})
      }
      
       
      })
      .catch(err => res.send(err))
  }
  static updateStudent(req, res) {
    const{id} = req.params
    const {firstName,lastName,gender,email,phone,photo,UserId}  = req.body 
    // console.log(req.params)
    console.log(req.body,"<<CREATE")
    if(id == 0){
    Profile.create({UserId,firstName,lastName,gender,email,phone,photo})
    .then(data => {
      // res.send(data)
      res.redirect("berhasil create")
    })
    .catch(err => res.send(err))
    }else{
    Profile.update({firstName,lastName,gender,email,phone,photo}, {where: {id}})
    .then(data => {
      // res.send(data)
      res.redirect("/user")
    })
    .catch(err => res.send(err))
    }
    
      // res.render('user')
      
  }
}

module.exports = UserController