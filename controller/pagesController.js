const pagesController = {
  getHome: (req, res) => {
      res.render('pages/index')
  },
  getAbout: (req, res) => {
      res.render('pages/about');
  },
  getCourses: (req, res) => {
      res.render('pages/courses');
  },
  getTeam: (req, res) => {
      res.render('pages/team');
  },
  getTestimonial: (req, res) => {
      res.render('pages/testimonial');
  },
  getContact: (req, res) => {
      res.render('pages/contact');
  }
};

module.exports = pagesController;