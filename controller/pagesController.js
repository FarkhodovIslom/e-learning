
exports.getAbout( (req, res) => {
    res.render("about");
    res.status(404);
});

exports.getCourses( (req, res) => {
    res.render("courses");
    res.status(404);

})

exports.getTeam( (req, res) => {
    res.render("team");
    res.status(404);

})

exports.getTestimonial( (req, res) => {
    res.render("testimonial");
    res.status(404);

})

exports.getContact( (req, res) => { 
    res.render("contact");
    res.status(404);
})