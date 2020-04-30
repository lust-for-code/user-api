var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    db.User.find()
        .then(function(users) {
            res.json(users);
        })
        .catch(function(err) {
            res.send(err);
        });
});

router.post('/', function(req, res) {
    db.User.create(req.body)
        .then(function(newUser) {
            res.json(newUser);
        })
        .catch(function(err) {
            res.send(err);
        })
});

router.get('/:username', function(req, res) {
    db.User.find({ username: req.params.username })
        .then(function(users) {
            res.json(users);
        })
        .catch(function(err) {
            res.send(err);
        });
});

module.exports = router;