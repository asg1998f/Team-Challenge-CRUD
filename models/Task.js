const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
}, { timestamps: true });
TaskSchema.index({
    title: "text",
})
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;







