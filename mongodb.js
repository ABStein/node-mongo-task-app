//CRUD operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
const { MongoClient, ObjectId} = require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }
    
    const db = client.db(databaseName);
    

    // CREATE
    db.collection('tasks').addMany((error, result) => {
        if (error) {
            return console.log(error);
        }

        console.log(result)
    })

    // READ
    db.collection('tasks').find({id: new ObjectId("5e5febb2b9b24cb9ceb3346d")}, (error, result) => {
        if (error) {
            return console.log(error);
        }

        console.log(result)
    })      

    // UPDATE
    db.collection('tasks').updateMany(
        {
            completed: false
        }, {
        $set: {
            completed: true,
        }
    }).then((resolve) => {
        console.log('This is resolved.');
    }).catch((error) => {
        return console.log('Error!', error);
    })

    // DELETE
    db.collection('tasks').deleteMany(
        {
            task: "Take out the trash",
        }
    ).then((resolve) => {
        console.log('This is resolved.');
    }).catch((error) => {
        return console.log('Error!', error);
    })    
});

