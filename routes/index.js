//const { response } = require('express');
const express = require('express');
const router = express.Router();


//requiring the home controller file to handle the respected routes

const homeController = require('../controllers/home_controller');
console.log("rorrrr");

// router for the home page
router.get('/', homeController.home );

// router to add the task
router.post('/add-task', homeController.add);

// router to delete the task

router.get('/delete-task', homeController.delete);


module.exports = router;