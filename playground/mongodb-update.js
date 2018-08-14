const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Error in establishing connection");
    }

    const db = client.db("TodoApp");

    db.collection('Todos').findOneAndUpdate(
        {_id : new ObjectID('5b6d5bb068b7124f7813ad09')},
        {$set : {
            completed: true
        },
        $inc : {
            setValue: 1
        }},
        {returnOriginal: false}
    ).then((result)=>{
        console.log(result)
    },(err)=>{
        console.log("Error while updating document",err);
    })

    client.close();
})