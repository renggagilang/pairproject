const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const session = require('express-session')

const RegisterController = require('./controllers/registerController')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: false,
  cookie: {
     secure: false,
     sameSite : true
    }
}))

// register
app.get("/register",RegisterController.getFormRegister)
app.post("/register",RegisterController.postFormRegister)

//login 
app.get("/login",RegisterController.getFormLogin)
app.post("/login",RegisterController.postFormLogin)

//logout
app.get("/logout",RegisterController.getLogout)

// midleware
// app.use((req, res, next) => {
//   if(!req.session.userId){
//     // console.log(req.session.userId)
//     res.redirect('/login?error=Please login first')
//   }else{
//     next()
//   }
 
// })

app.use(routes)



app.listen(port, () => console.log(`Movies App running on http://localhost:${port}`))