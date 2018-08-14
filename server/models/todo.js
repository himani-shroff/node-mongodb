var {mongoose}= require('../db/mongoose');

var Todo = mongoose.model('Todo',{
        text: {
            type: String
        },
        completed: {
            type: Boolean
        },
        completedAt: {
            type: Number,
            default: null
        }
    });

module.exports = {Todo};