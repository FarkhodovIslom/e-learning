
exports.getAbout((req, res) => {
    res.render("about");
});

exports.getCourses((req, res) => {
    res.render("courses");
})

exports.getTeam((req, res) => {
    res.render("team");
})

exports.getTestimonial((req, res) => {
    res.render("testimonial");
})

exports.getContact((req, res) => { 
    res.render("contact");
})