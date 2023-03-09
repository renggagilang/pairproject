const {User} = require('../models')
const bcrypt = require('bcryptjs');

class RegisterController{

  static getFormRegister(req,res){
    const {error} = req.query
    res.render('formRegister',{error})
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
    .catch(err=>{
      let error = err.errors.map(el=>el.message)
      res.redirect(`/register?error=${error}`)
    } );
  }

  static getFormLogin(req,res){
    const {error} = req.query
    res.render('formLogin',{error})
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
          req.session.userId = user.id
          return res.redirect('/')
        }else{
          return res.send("Password Salah")
        }
      }else{
        return res.send("username Salah")
      }
     
    })
    .catch(err=> res.send(err.errors[0].message));
  }

  static getLogout(req,res){
    req.session.destroy(function(err) {
      if(err) res.send(err)
      else{res.redirect('login')}
    })
  }
}
module.exports = RegisterController