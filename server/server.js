var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

const port = process.env.PORT || 3000;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
let db = mongoose.connection;

app.use(bodyParser.json());



app.get('/todos', (req,res)=>{
    db.on('error', function () {console.log('error');});
    console.log("MONGO_URI",process.env.MONGODB_URI);
    mongoose.connect("mongodb://<himani.shroff>:<Pas$word99>@ds121262.mlab.com:21262/nodejs-mongoose-deployment", function (err) {
    if (err) {  return console.log('there was a problem' + err);  }
    console.log('connected!');
    Todo.find().then((docs) => {
        console.log('inside success');
        res.send(docs);
    },(err)=>{
        res.status(400).send(err);
    })
    });
    console.log('inside todos');
    // Todo.find().then((docs) => {
    //     console.log('inside success');
    //     res.send(docs);
    // },(err)=>{
    //     res.status(400).send(err);
    // })
})

app.get('/todos/:id', (req,res)=>{
    var id = req.params.id;
    console.log(res);
    if(!ObjectID.isValid(id)){
       return res.status(400).send("Please enter a valid ID")
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



app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text: req.body.text,
        completed: req.body.completed
    })
    db.on('error', function () {console.log('error');});
    console.log("MONGO_URI",process.env.MONGODB_URI);
    mongoose.connect("mongodb://<himani.shroff>:<Pas$word99>@ds121262.mlab.com:21262/nodejs-mongoose-deployment", function (err) {
    if (err) {  return console.log('there was a problem' + err);  }
    console.log('connected!');
    todo.save(function (error, data) {
    if (error) {console.log(error);} 
    db.close();
    process.exit();
    });
    });
    console.log(`body: ${JSON.stringify(req.body)}`)
    

    // todo.save().then((doc)=>{
    //     res.send(doc);
    //     console.log(doc);
    // },(err)=>{
    //     res.status(400).send(err);
    // })
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



