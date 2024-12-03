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
    async getTasksByTitle(req,res) {
        try {
            const tasks = await Task.find({
                $text:{
                    $search: req.params.title,
                },
            })
            res.send({message: "Here you have your title task",tasks})
        } catch (error) {
            console.error(error);
            res.status(500).send({message: "There was a problem"})
        }
    },
    async update(req, res) {
        try {
          const task = await Task.findByIdAndUpdate(
            req.params._id, 
            req.body,
            { new: true }
        )
          res.send({ message: "Task successfully updated", task });
        } catch (error) {
          console.error(error);
        }
      },
    async delete(req,res){
        try {
            const task = await Task.findByIdAndDelete(req.params._id)
            res.send({ message: 'Task deleted', task })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'There was a problem trying to remove the task'})
        }
    }
}

module.exports = TaskController