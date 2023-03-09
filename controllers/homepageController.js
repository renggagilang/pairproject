

class HomepageController {
  static showHomepage(req, res) {
    // res.send("ini dari hompage")
      res.render('home')
  }
}

module.exports = HomepageController