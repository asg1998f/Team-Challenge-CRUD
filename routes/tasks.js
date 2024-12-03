const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router()

router.post("/create",TaskController.create)
router.get("/getAll",TaskController.getAll)
router.get("/id/:_id",TaskController.getById)
router.get("/getByTitle/:title",TaskController.getTasksByTitle)

module.exports = router