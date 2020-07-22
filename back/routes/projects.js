const express = require('express');
const router = express.Router();
//const passport = require("passport");

const projectsController = require('../controllers/projects');

// Get all projects
router.get('/', projectsController.getAllProjects);

// Get one projects by the id
router.get('/:id', projectsController.getOneProject);

// -------------------- Auth wall
// router.use((req, res, next) => {
//   passport.authenticate("jwt", { session: false }, (err, user, msg) => {
//     if (err) {
//       console.log("----");
//       console.log(err);
//       return res.status(500).send(err);
//     }
//     if (!user) {
//       console.log("----");
//       console.log("No user found");
//       return res.sendStatus(500);
//     }
//     next();
//   })(req, res);
// });
// -------------------- / Auth wall

// Post one project
router.post('/', projectsController.postProject);

module.exports = router;
