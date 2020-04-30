var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.set('debug', true);
const url = process.env.DATABASEURL || "mongodb://localhost/user_api";
mongoose.connect(url, { useNewUrlParser: true });


mongoose.Promise = Promise;

module.exports.User = require("./user");