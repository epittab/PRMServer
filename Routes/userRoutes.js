const express = require('express'); 
const Router = express.Router(); 

const DB = require('../DB/userTable.js')

Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next(); 
}) 
.get(async (req, res, next) => { 
    const results = await DB.readAllRows();
        res.send(JSON.stringify(results));
}) 
.post((req, res, next) => { 
    res.end('When a POST request is made, then this '
            + 'is the response sent to the client!'); 
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