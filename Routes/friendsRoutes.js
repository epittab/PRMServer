const express = require('express'); 
const Router = express.Router(); 

const DB = require('../DB/friendsTable.js')

Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next(); 
}) 
.get((req, res, next) => { 
    res.end('When a GET request is made to friends, then this '
            + 'is the response sent to the client!'); 
}) 
.post((req, res, next) => { 
    console.log(req.body)
    res.status(201).send(req.body)
}) 
.put((req, res, next) => { 
    res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!'); 
}) 
.delete((req, res, next) => { 
    res.end('When a DELETE request is made, then this '
            + 'is the response sent to the client!'); 
}); 
   
module.exports = Router; 