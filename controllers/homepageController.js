const validation =require("validation")




class HomepageController {
  static showHomepage(req, res) {
    // res.send("ini dari hompage")
    console.log(validation.isType(new Date(), 'date')  )
    res.render('home')
  }
}

module.exports = HomepageController