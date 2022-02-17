const mongoose = require('mongoose');

// schema

const ListSchema = new mongoose.Schema({
    // field for the title of the task
    title: {
        type: String,
        required:true
    },

    // field for the descripton of the task
    desc: {
        type: String,
        required: true
    },

    // field for the category of the task
    categ: {
        type: String,
        required: true
    },
    
    // field for the due-date of the task

    duedate: {
        type: String,
        required: true
    }
});


const TaskList = mongoose.model('TaskList', ListSchema);
module.exports = TaskList;
