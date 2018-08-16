var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());


app.get('/todos/:id', (req,res)=>{
    var id = req.params.id;
    console.log(res);
    if(!ObjectID.isValid(id)){
       return res.status(400).send("Invalid ID")
    }
    Todo.findById(id).then((todo)=>{
        if(todo){
            res.send(todo);
        }else{
            res.status(404).send("No data found")
        }
        
    }).catch((e)=>{
        res.status(400).send(e);
    })
})



// app.post('/todos',(req,res)=>{
//     console.log(`body: ${JSON.stringify(req.body)}`)
//     var todo = new Todo({
//         text: req.body.text,
//         completed: req.body.completed
//     })

//     todo.save().then((doc)=>{
//         res.send(doc);
//         console.log(doc);
//     },(err)=>{
//         res.status(400).send(err);
//     })
// })

app.get('/todos', (req,res)=>{
    console.log('inside todos');
    Todo.find().then((docs) => {
        console.log('inside success');
        res.send(docs);
    },(err)=>{
        res.status(400).send(err);
    })
})



/* mongoose queries */

// User.findById('5b718a08b0607c1410f5a106').then((doc)=>{
//     if(!doc){
//         return console.log("No data found");
//     }
//     console.log(`Data: ${doc}`);
// }).catch((e)=>{
//     console.log('Error while execution');
// })

app.listen(port, ()=>{
    console.log('Starting on port', port);
})


module.exports={app};



