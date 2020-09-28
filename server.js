const express=require('express');
const axios=require('axios');
app=express();
const requestOne = axios.get("http://api.openweathermap.org/data/2.5/weather?q=siliana&appid=7ef6bc0c12fb906168039e5548377cd8");
const requestTwo = axios.get("http://api.openweathermap.org/data/2.5/weather?q=ariana&appid=7ef6bc0c12fb906168039e5548377cd8");
const requestThree = axios.get("http://api.openweathermap.org/data/2.5/weather?q=tunis&appid=7ef6bc0c12fb906168039e5548377cd8")

axios.all([requestOne, requestTwo, requestThree])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });

  app.get("/", (req, res)=> {
    res.send("Axios Checkpoint");
  });
  
  app.get("/siliana", (req, res) => {
    requestOne
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });

  app.get("/ariana", (req, res) => {
    requestTwo
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });


  app.get("/tunis", (req, res) => {
    requestThree
      .then((data) => {
        res.json(data.data);
      })
      .catch((err) => {});
  });






app.listen(3000, () => {
    console.log(`server is running on port 3000`);
  });