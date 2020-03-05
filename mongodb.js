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
});

