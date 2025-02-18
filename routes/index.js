const express = require("express");
const router = express.Router();
const controller = require("../controller/pagesController");


router.get("/about", controller.getAbout);
router.get("/courses", controller.getCourses);
router.get("/team", controller.getTeam);
router.get("/testimonial", controller.getTestimonial);
router.get("/")