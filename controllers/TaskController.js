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
    }
}

module.exports = TaskController