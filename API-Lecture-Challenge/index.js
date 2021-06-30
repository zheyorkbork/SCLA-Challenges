const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 4200;

app.get("/activity", async function(request,response){
    const api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
    const activityList = Object.entries(json);
});
app.get("/param/:activity", async (request, response) => {
  const activity = request.params.activity;
  const api_url = `http://www.boredapi.com/api/activity?type=${activity}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
  

});
app.listen(port, function(){
    console.log(`App listening on http://localhosts:${port}`);
    //console.log('Listening on port: ' + port)
});

app.get("/Oneactivity", async function(request,response){
    const api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    //response.json(json);
    const activityList = Object.entries(json);
    let counter = 0;
    response.send("Activity: " + activityList[counter]);
});