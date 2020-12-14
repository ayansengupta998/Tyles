//  ./app.js 
    
const express = require('express')
const app = express()
 
//middlewares
app.use(express.static('public'))

//Listen on port 3000
server = app.listen(3000)
//socket.io instantiation
const io = require("socket.io")(server)

 // ./app.js
   
  
   
   //listen on every connection
//    io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       io.emit('message: ' + msg);
//     });
//   });
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });