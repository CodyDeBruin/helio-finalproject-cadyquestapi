//
//  EXPRESS CONNECTION / SETUP DONE HERE
// 
// 
//
//
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000

//middleware, parses json body into the req.body property
app.use(cors())
app.use(express.json());

//
//  ROUTING SET UP HERE
// 

const articleRoutes = require('./src/routes/article-routes').routes
const userRoutes = require('./src/routes/userAuth').routes

const expressRouting = [
    ...articleRoutes,
    ...userRoutes
]

expressRouting.map((val)=>{
    app[val.type](val.endpoint, val.cb)
})


app.listen(port, () => console.log("Express listening on port: ", port))

