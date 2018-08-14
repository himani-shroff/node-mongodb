const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,client)=>{
    if(err){
        return console.log("Unable to connect to mongodb server",err)
    }
    console.log("Connected to mongodb server");

    const db= client.db("TodoApp");

    // Multiple delete

    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((obj)=>{
    //     console.log("Deleted Object: ", obj);
    // }, (err)=> {
    //     console.log("Unable to delete object", err);
    // })

    // Single delete

    // db.collection('Todos').deleteOne({text : 'Something to do'}).then((obj)=>{
    //     console.log("Deleted Object: ", obj);
    // },(err)=>{
    //     console.log("Unable to delete");
    // })  
    
    // Find and delete

    db.collection('Todos').findOneAndDelete({text : 'Something to do part 2'}).then((obj)=>{
        console.log("Deleted Object: ", obj);
    },(err)=>{
        console.log("Unable to delete");
    })

    client.close();
})