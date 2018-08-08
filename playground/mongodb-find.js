const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

     const db = client.db('ABC');
    
     db.collection('User').find({
         _id : new ObjectID('5b6aa9b15de820b5fc5efb0c')
     }).toArray().then((docs)=>{
         console.log(JSON.stringify(docs, undefined, 2));
     }, (err) =>{
         console.log("Unable to fetch users");
     })

     db.collection('User').find().count().then((count)=> console.log(`Count: ${count}`),
    (err)=>{
        console.log("Unable to fetch users");
    })

    client.close();
});