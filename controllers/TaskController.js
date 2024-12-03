const Task = require("../models/Task")

const TaskController = {
    async create(req,res){
        try {
            const task = await Task.create(req.body)
            res.status(201).send({message: "Task successfully created",task})
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem"})
        }
    },
    async getAll(req, res) {
        try {
           const tasks = await Task.find()
           res.send({message: "Here you have all your tasks",tasks})
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem"})
        }
    },
    async getById(req, res) {
        try {
            const task = await Task.findById(req.params._id)
            res.send({message: "Here you have your task",task})
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem"})
        }
    },
}

module.exports = TaskController