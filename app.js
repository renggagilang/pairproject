const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')

const RegisterController = require('./controllers/registerController')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// sitem  
// 1. bikin route login get /login (menapilin halaman form) dan post /login (nerima data)
// 1. buat hook sebelum create otomatis( role di set menjadi student dan paswordnya di brypict)
// 2. di controller hanya create
// 3. setelah dafatr ke login
// register
app.get("/register",RegisterController.getFormRegister)
app.post("/register",RegisterController.postFormRegister)

//login 
app.get("/login",RegisterController.getFormLogin)
app.post("/login",RegisterController.postFormLogin)

// sistem login  
// 1. bikin route login get /login (menapilin halaman form) dan post /login (nerima data)
// 2.. handel data  masuk controller post login
// 3. mencocokkan username dan pasword yang di input findOne gk pake include  . masuk ke table user 
// 4. setelah user cocok dari post , maka user di arahkan ke halamn home 
// 5. jika gagal buat pesan eror  
//// 
app.use(routes)



app.listen(port, () => console.log(`Movies App running on http://localhost:${port}`))