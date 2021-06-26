const express = require('express');
const app = express();
const port = 3000;

app.get('/home', function(req, res){
    console.log(__dirname)
    res.sendFile(__dirname + '/pages/homepage.html');
})

app.get ('/about', function(req, res) {
    console.log(__dirname)
    res.sendFile(__dirname + '/pages/about.html')
})
app.get ('/contact', function(req, res) {
   console.log(__dirname) 
   res.sendFile(__dirname + '/pages/contact.html')
})
app.get ('/', function(req, res){
  console.log(__dirname)
  res.sendFile(__dirname + '/pages/root.html')
})

app.post ('/home', function(req, res){
  res.send("LINUX!!!");
})

app.get ('/root', function(req,res){
  res.sendFile(__dirname + '/pages/secret.html')
})


app.listen(port,function(){
    console.log("listening at prot:" + port)
});



