const express = require('express');
const TaskController = require('../controllers/TaskController');
const router = express.Router()

router.post("/create",TaskController.create)
router.get("/getAll",TaskController.getAll)
router.get("/id/:_id",TaskController.getById)
router.get("/getByTitle/:title",TaskController.getTasksByTitle)
router.put("/id/:_id",TaskController.update)
router.delete("/id/:_id",TaskController.delete)

module.exports = router