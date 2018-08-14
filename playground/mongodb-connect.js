const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')

    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do part 2',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    const db = client.db('ABC');
    db.collection('User').insertOne({
        name:'Himani Shroff',
        age:24,
        location:'Indore'
    },(err,result)=>{
        if(err){
            return console.log("Unable to insert", err);
        }

        console.log(JSON.stringify(result, undefined, 2));
    })

    client.close();
});