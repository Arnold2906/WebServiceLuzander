const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routeSistema = require("./routes/sistemaroute.js")  

var app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/estadistica', routeSistema);


const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });