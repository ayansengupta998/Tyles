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
  io.on('connection', (socket) => {
    //button1
    socket.on('button1', (msg) => {
       io.emit('button1', msg);
       

     });
    //button2
    socket.on('button2', (msg) => {
      io.emit('button2', msg);
      

    });
    //button3
    socket.on('button3', (msg) => {
      io.emit('button3', msg);
      

    });
    //button4
    socket.on('button4', (msg) => {
      io.emit('button4', msg);
      

    });
    //button5
    socket.on('button5', (msg) => {
      io.emit('button5', msg);
      

    });
    //button6
    socket.on('button6', (msg) => {
      io.emit('button6', msg);
      

    });
    //button7
    socket.on('button7', (msg) => {
      io.emit('button7', msg);
      

    });
    //button8
    socket.on('button8', (msg) => {
      io.emit('button8', msg);
      

    });
    //button9
    socket.on('button9', (msg) => {
      io.emit('button9', msg);
      

    });
    //button10
    socket.on('button10', (msg) => {
      io.emit('button10', msg);
      

    });
    //button11
    socket.on('button11', (msg) => {
      io.emit('button11', msg);
      

    });
    //button12
    socket.on('button12', (msg) => {
      io.emit('button12', msg);
      

    });
   });
  //io.on('connection', (socket) => {
  //  socket.on('button1', (msg) => {
  //    

  //  });
  //});