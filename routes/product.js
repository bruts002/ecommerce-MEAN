var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('{{dbconnection}}', ['contacts']);
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecom"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


// Get all contacts
router.get('/product', function(req, res, next) {
    con.query('SELECT * FROM products', function (err, product) {
        if (err) {
            /** TODO: Handle error better! */
            res.send(err);
        }
        res.json(product);
    });
});

// Get single contacts
router.get('/product/:id', function(req, res, next) {
    con.query('SELECT * FROM products WHERE id = ?', req.params.id, function(err, product) {
        if (err) {
            /** TODO: Handle error better! */
            res.send(err);
        }
        res.json(product);
    });
});

// Save contacts
router.post('/product/', function(req, res, next) {
    var product = req.body;
    if (!product.cat || !product.brand || !product.title || !product.price ||
        !product.description || !product.image || !product.keywords) {
        res.status = 400;
        res.json({
            "error": "Bad Data"
        });
    } else {
        con.query(`INSERT INTO products (cat,brand,title,price,description,image,keywords)
        values ('${product.cat}','${product.brand}','${product.title}','${product.price}','${product.description}','${product.image}','${product.keywords}')`);
    }
});

// Delete single contacts
router.delete('/contacts/:id', function(req, res, next) {
    db.contacts.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, contacts) {
        if (err) {
            res.send(err);
        }
        res.json(contacts);
    });
});

// Update single contacts
router.put('/contacts/:id', function(req, res, next) {
    var contacts = req.body;
    var updContacts = {};

    if (contacts.isDone) {
        updContacts.isDone = contacts.isDone;
    }
    if (contacts.title) {
        updContacts.title = contacts.title;
    }

    if (!updContacts) {
        res.status(400);
        res.json({"error":"Bad data"});
    } else {
        db.contacts.update({_id: mongojs.ObjectId(req.params.id)},updContacts,{}, function(err, contacts) {
            if (err) {
                res.send(err);
            }
            res.json(contacts);
        });
    }
    
});

module.exports = router;
