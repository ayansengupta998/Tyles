//  ./app.js 
    
const express = require('express')
const app = express()

var status_reg_a = new Array(12).fill(false);
var status_reg_b = new Array(12).fill(false);
var status_ob_a = new Array(12).fill(false);
var status_ob_b = new Array(12).fill(false);
 
//middlewares
app.use(express.static('public'))

//Listen on port 3000
server = app.listen(3000)
//socket.io instantiation
const io = require("socket.io")(server)

function button(socket, status) {
  //button1
  socket.on('button1', (msg) => {
    io.emit('button1', msg);
    status[0] = !status[0];

    });
  //button2
  socket.on('button2', (msg) => {
    io.emit('button2', msg);
    status[1] = !status[1];

  });
  //button3
  socket.on('button3', (msg) => {
    io.emit('button3', msg);
    status[2] = !status[2];

  });
  //button4
  socket.on('button4', (msg) => {
    io.emit('button4', msg);
    status[3] = !status[3];

  });
  //button5
  socket.on('button5', (msg) => {
    io.emit('button5', msg);
    status[4] = !status[4];

  });
  //button6
  socket.on('button6', (msg) => {
    io.emit('button6', msg);
    status[5] = !status[5];

  });
  //button7
  socket.on('button7', (msg) => {
    io.emit('button7', msg);
    status[6] = !status[6];

  });
  //button8
  socket.on('button8', (msg) => {
    io.emit('button8', msg);
    status[7] = !status[7];

  });
  //button9
  socket.on('button9', (msg) => {
    io.emit('button9', msg);
    status[8] = !status[8];

  });
  //button10
  socket.on('button10', (msg) => {
    io.emit('button10', msg);
    status[9] = !status[9];

  });
  //button11
  socket.on('button11', (msg) => {
    io.emit('button11', msg);
    status[10] = !status[10];

  });
  //button12
  socket.on('button12', (msg) => {
    io.emit('button12', msg);
    status[11] = !status[11];

  });
}
 // ./app.js
   
  
   
   //listen on every connection
  //reg a
  io.on('connection', (socket) => {
    for(i = 0; i < status_reg_a.length; i++)
    {
      if(status_reg_a[i])
        io.emit('button' + (i + 1), '');
    }
    button(socket, status_reg_a);
  });
  //io.on('connection', (socket) => {
  //  socket.on('button1', (msg) => {
  //    

  //  });
  //});