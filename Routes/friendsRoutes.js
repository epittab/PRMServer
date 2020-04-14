const express = require('express'); 
const Router = express.Router(); 

const DB = require('../DB/friendsTable.js')

Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next(); 
}) 
.get( async (req, res, next) => { 
    const results = await DB.readAllRows();
    res.send(JSON.stringify(results));
}) 
.post( async (req, res, next) => {
    try {
        const success = await DB.insertNewFriend(req.body)
        console.log(req.body)
        res.status(201).send(req.body)
    } 
    catch(error){

    }
    
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