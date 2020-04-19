const express = require('express');
const app = express();

const bodyParser = require('body-parser');
require('dotenv').config()

PORT = process.env.PORT

//Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET'); 
        return res.status(200).json();  
    }

    next();
});

//Routing
const engageRoutes = require('./Routes/engageRoutes')
const engageTypeRoutes = require('./Routes/engageTypeRoutes')
const userRoutes = require('./Routes/userRoutes')
const friendsRoutes = require('./Routes/friendsRoutes')

app.use('/api/engage', engageRoutes);
app.use('/api/engagetype', engageTypeRoutes);

app.use('/api/user', userRoutes);
app.use('/api/friends', friendsRoutes);

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(PORT, ()=>{console.log(`listening on Port ${PORT}`)})
