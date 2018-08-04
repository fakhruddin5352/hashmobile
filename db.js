const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://187.72.74.228:27017';

// Database Name
const dbName = 'hash';


exports.loadAll = function (callback){
    // Use connect method to connect to the server
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
    
        const db = client.db(dbName);
    
        const collection = db.collection('ib');
        // Find some documents
        collection.find({}).limit(10).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(docs)
          callback(null,docs);
          client.close();
        });

    });
  
}
