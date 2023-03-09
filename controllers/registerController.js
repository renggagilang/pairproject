const {User} = require('../models')
const bcrypt = require('bcryptjs');

class RegisterController{

  static getFormRegister(req,res){
    res.render('formRegister')
  }

  static postFormRegister(req,res){
    const {username,email,role,password} = req.body
    // res.send({username,email,role,password})
    // res.render('formRegister')
    User.create({username,email,role,password})
    .then (()=>{
      res.redirect(`/login`)
      // res.send(data)
    })
    .catch(err=> res.send(err));
  }

  static getFormLogin(req,res){
    res.render('formLogin')
  }

  static postFormLogin(req,res){
    const {username,password} = req.body
    // res.send({username,email,role,password})
    // res.render('formRegister')
    User.findOne({where:{username}})
    .then (user=>{
      if(user) {
        const invalidPassword = bcrypt.compareSync(password, user.password);
        if(invalidPassword){
          return res.send("berhasil login")
        }else{
          return res.send("Password Salah")
        }
      }else{
        return res.send("username Salah")
      }
     
    })
    .catch(err=> res.send(err));
  }

}
module.exports = RegisterController