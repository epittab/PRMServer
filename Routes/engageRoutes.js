const express = require('express'); 
const Router = express.Router(); 

const DB = require('../DB/engageTable.js')

Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next(); 
}) 
.get( async (req, res, next) => { 
    try {
        const results = await DB.readAllRows();
        res.send(JSON.stringify(results));
    }
    catch(error) {
        console.log(`There was an error: ${error}`)
    }
  
}) 
.post( async (req, res, next) => { 
    try {
        res.end('When a POST request is made, then this '
            + 'is the response sent to the client!'); 
    }
    catch(error) {
        console.log(`There was an error: ${error}`)
    }
}) 
.put( async (req, res, next) => { 
    try {
        res.end('When a PUT request is made, then this '
            + 'is the response sent to the client!'); 
    }
    catch(error) {
        console.log(`There was an error: ${error}`)
    }
}) 
.delete( async (req, res, next) => { 
    try {
        res.end('When a Delete request is made, then this '
            + 'is the response sent to the client!'); 
    }
    catch(error) {
        console.log(`There was an error: ${error}`)
    }
}); 
   
module.exports = Router; 