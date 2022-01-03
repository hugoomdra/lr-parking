const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
let app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://opendata.agglo-larochelle.fr');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const port = process.env.PORT || 3000;
app.listen(port);

app.get('/data_parking', function(req, res) {

    fetch("https://api.agglo-larochelle.fr/production/opendata/api/records/1.0/search/dataset=parking___places_disponibles_en_temps_reel&rows=1000&facet=id",{
        method: 'GET',
        cache: "no-cache", 
        credentials: "same-origin", 
        headers: {"Content-Type": "application/json"}
      })
    .then(data => {
        console.log(res.send(data))
    })

  });