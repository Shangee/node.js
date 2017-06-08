var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/music";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = {Song_Name: 'Why this kolai very', Film: '3', Music_Director: 'A.R.Rahman',Singer: 'Shankar mahadevan'};
  db.collection("musicdetails").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 record inserted");
    db.close();
  });
});
