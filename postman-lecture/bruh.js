const express = require('express');
const app = express();
const MongoClient = require('mongodb');
let db;
const port = 3000;
var ObjectId = require('mongodb').ObjectID;


const uri = "mongodb+srv://usr:us@cluster0.7l7yk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.use(express.json());
MongoClient.connect(uri, {useUnifiedTopology:true}, function(err,client){
    console.log("Connected to MongoDB Successfully!");
    db = client.db("mongodb-lecture");
})

app.listen(port,function(req,res){
    console.log("Listening at port" + port);
})

app.get('/addHero', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/addHero', function(req,res){
    db.collection('blogs').insertOne(
        {
        title: "titleValue",
        content: "contentValue"
        }
    ,function(err,result){
        if(err) throw error;
        res.send("Blog Added Successfully");
    })
})

app.get('/getHeroes', function(req, res){
    db.collection('blogs').find({}).toArray(function(error, documents){
        if (error) throw error;
        console.log(documents.length)
        for(let counter = 0; counter < documents.length; counter++){
            res.write("Title:" + documents[counter].title + " Content" + documents[counter].content + " Id:" + documents[counter]._id + '\n');
        }
        res.end();
    })
})


app.post('/customHero', function(req, res){
    
    db.collection('blogs').insertOne({
        _id: req.body._id,
        title: req.body.title,
        content: req.body.content
    },function(err,result){
        if(err) throw err;
        res.send("Hero Added Successfully");

    })
})

app.get('/getHeroes', function(req, res){
    db.collection('blogs').find({}).toArray(function(error, documents){
            if (error) throw error;
            console.log(documents.length)
            for(let counter2 = 0; counter2 < documents.length; counter++){
                res.write("Id: " + documents[counter]._id + '\n');
            }
            res.end();
    })
})

app.get('/findHeroByID', function(req,res){
    db.collection('blogs').findOne({
        _id: req.body._id
    })
    db.collection('blogs').find({"_id" : ObjectId("60da7c4f67cc203d7c359970")}).toArray( function(error, documents){
    if (error) throw error;
    console.log(documents)
    res.send(documents)
    })
})
 
