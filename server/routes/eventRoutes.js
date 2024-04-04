const express = require("express");
const router = express.Router();

const eventController = require("../controllers/eventController");

// /*
// app routers
// */
router.get("/", eventController.homepage);
router.get("/aboutus", eventController.aboutus);
router.get("/adminView", eventController.adminView);
router.get("/adminLogin", eventController.adminLogin);
router.get("/userLogin", eventController.userLogin);
router.get("/clubs", eventController.exploreClubs);
router.get("/clubs/:id", eventController.exploreClubsById);
router.get("/event/:id", eventController.exploreEvent);
router.post("/search", eventController.searchEvent);
router.get("/explore-latest", eventController.exploreLatest);
// router.get("/explore-random", eventController.exploreRandom);
router.get("/submit-event", eventController.submitEvent);
router.post("/submit-event", eventController.submitEventOnPost);
router.post("/userLogin", eventController.userLoginOnPost);



module.exports = router;