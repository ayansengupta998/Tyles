//  ./app.js 
    
const express = require('express')
const app = express()

//middlewares
app.use(express.static('public'))

//Listen on port 3000
server = app.listen(3000)
 // ./app.js
   
   //socket.io instantiation
   const io = require("socket.io")(server)
   
   //listen on every connection
   io.on('connection', (socket) => {
           //add function to receive and emit response
   })