var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 4000;
var userRoutes = require('./routes/users');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function(req, res) {
    res.send("Hello this is ROOT route");
})


app.use('/users', userRoutes);


app.listen(port, function() {
    console.log("App has started !!");
});