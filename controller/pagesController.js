let getAbout = (req, res) => {
  res.render("about");
  res.status(404);
};

let getCourses = (req, res) => {
  res.render("courses");
  res.status(404);
};

let getTeam = (req, res) => {
  res.render("team");
  res.status(404);
};

let getTestimonial = (req, res) => {
  res.render("testimonial");
  res.status(404);
};

let getContact = (req, res) => {
  res.render("contact");
  res.status(404);
};

module.exports = {
  getAbout,
  getCourses,
  getTeam,
  getTestimonial,
  getContact,
};
