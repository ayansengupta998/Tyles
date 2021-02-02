//  ./app.js 
    
const express = require('express')
const app = express()

var status_reg_a = new Array(12).fill(false);
var status_reg_b = new Array(12).fill(false);
var status_obs_a = new Array(12).fill(false);
var status_obs_b = new Array(12).fill(false);
 
//middlewares
app.use(express.static('public'))

//Listen on port 3000
server = app.listen(3000)
//socket.io instantiation
const io = require("socket.io")(server)

function log_change(button, value, msg)
{

  console.log(value)
  switch (msg){
    case "regA":
      status_reg_a[button - 1] = value;
      break;
    case "regB":
      console.log(status_reg_b[button - 1])
      status_reg_b[button - 1] = value;
      break;
    case "obsA":
      status_obs_a[button - 1] = value;
      break;
    case "obsB":
      status_obs_b[button - 1] = value;
      break;
  }
}

function status(msg)
{
  switch (msg){
    case "regA":
      return status_reg_a;
      break;
    case "regB":
      return status_reg_b;
      break;
    case "obsA":
      return status_obs_a;
      break;
    case "obsB":
      return status_obs_b;
      break;
  } 
}
function button(socket) {
  //button1
  socket.on('button1', (params) => {
    log_change(1, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button2
  socket.on('button2', (params) => {
    
    log_change(2, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button3
  socket.on('button3', (params) => {
    
    log_change(3, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button4
  socket.on('button4', (params) => {
    
    log_change(4, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button5
  socket.on('button5', (params) => {
    
    log_change(5, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button6
  socket.on('button6', (params) => {
    
    log_change(6, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button7
  socket.on('button7', (params) => {
    
    log_change(7, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button8
  socket.on('button8', (params) => {
    
    log_change(8, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button9
  socket.on('button9', (params) => {
    
    log_change(9, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button10
  socket.on('button10', (params) => {
    
    log_change(10, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button11
  socket.on('button11', (params) => {
    
    log_change(11, params[0], params[1])
    io.emit('update', status(params[1]))
  });
  //button12
  socket.on('button12', (params) => {
    
    log_change(12, params[0], params[1])
    io.emit('update', status(params[1]))
  });
}

io.on('connection', (socket => {
  button(socket)

  socket.on('init', (msg) => {
   
    if(msg == 'regA') {
  
      for(i = 0; i < status_reg_a.length; i++)
      {
        if(status_reg_a[i])
          io.emit('button' + (i + 1), [!status_reg_a[i], msg]);
      }
    } else if(msg == 'regB') {
      for(i = 0; i < status_reg_b.length; i++)
      {
        if(status_reg_b[i])
          io.emit('button' + (i + 1), [!status_reg_b[i], msg]);
      }
    } else if(msg == 'obsA') {
  
      for(i = 0; i < status_obs_a.length; i++)
      {
        if(status_obs_a[i])
          io.emit('button' + (i + 1), [!status_obs_a[i], msg]);
      }
    } else if(msg == 'obsB') {
      for(i = 0; i < status_obs_b.length; i++)
      {
        if(status_obs_b[i])
          io.emit('button' + (i + 1), [!status_obs_b[i], msg]);
      }
    }
  });
}));