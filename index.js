const express = require('express');
const app = express();

require('dotenv').config()

PORT = process.env.PORT


//Routing
const engageRoutes = require('./Routes/engageRoutes')
const userRoutes = require('./Routes/userRoutes')
const friendsRoutes = require('./Routes/friendsRoutes')

app.use('/api/engage', engageRoutes);
app.use('/api/user', userRoutes);
app.use('/api/friends', friendsRoutes);

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(PORT, ()=>{console.log(`listening on Port ${PORT}`)})
