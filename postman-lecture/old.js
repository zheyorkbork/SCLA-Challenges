const { json } = require('express');
const express = require('express');
const app = express();
const MongoClient = require('mongodb');
const port = 3000;
let db;
app.use(express.json()); 
const uri = "mongodb+srv://jordor:jar@cluster0.7l7yk.mongodb.net/myFirstDatabase?retryWrites=true&w=majorityy";
MongoClient.connect(uri, {useUnifiedTopology:true},function (error,client){
  console.log("connected to MongoDB successfully");
  db = client.db("mongodb-lecture");
})
app.listen(port, function (req,res){
  console.log("Listening at port:" + port)
})

app.get('/addBlog', function(req,res){
  res.sendFile(__dirname + "/index.html")
});

app.post('/addBlog', function (req,res){
  db.collection('blogs').insertOne(
    {
    title: "Title",
    content: "contentValue"   
  }, function (error,result){
    if (error) throw error;
    res.send("blog added success");
  })
})
app.get('/getBlogs', function (req, res){
  db.collection('blogs').find({}).toArray(function (error,documents){
    if (error) throw error;
    for(let counter = 0; counter < documents.length;counter ++){
      res.write("Title: " + documents[counter].title + "content: " + documents[counter].content + '\n');
    }
    res.end();
  })
})


app.post('/customBlog', function(req,res){
  db.collection('Blogs').insertOne({
    title: req.body.title,
    content: req.body.content
  }, function(err,result){
    if(err) throw err;
    res.send('Blog added success');
  })  
})