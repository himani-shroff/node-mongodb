var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    console.log(`body: ${JSON.stringify(req.body)}`)
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    })

    todo.save().then((doc)=>{
        res.send(doc);
        console.log(doc);
    },(err)=>{
        res.status(400).send(err);
    })
})

app.listen(3000, ()=>{
    console.log('Starting on port 3000');
})
