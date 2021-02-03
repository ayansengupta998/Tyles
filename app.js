//  ./app.js 
    
const express = require('express')
const app = express()

// arrays to store current off/on values: false = off, true = on
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

// this function changes the correct array, based on which page it is coming from
// value is the value to set the button to, msg is a string which should contain a page name: regA, regB, obsA, or obsB
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

// returns the correct status array given a page name
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

// adds listeners to socketio channels button# for # = 1 through 12
function button(socket) {
  //button1
  socket.on('button1', (params) => {
    log_change(1, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button2
  socket.on('button2', (params) => {
    
    log_change(2, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button3
  socket.on('button3', (params) => {
    
    log_change(3, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button4
  socket.on('button4', (params) => {
    
    log_change(4, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button5
  socket.on('button5', (params) => {
    
    log_change(5, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button6
  socket.on('button6', (params) => {
    
    log_change(6, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button7
  socket.on('button7', (params) => {
    
    log_change(7, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button8
  socket.on('button8', (params) => {
    
    log_change(8, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button9
  socket.on('button9', (params) => {
    
    log_change(9, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button10
  socket.on('button10', (params) => {
    
    log_change(10, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button11
  socket.on('button11', (params) => {
    
    log_change(11, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
  //button12
  socket.on('button12', (params) => {
    
    log_change(12, params[0], params[1])
    io.emit('update', [params[1], status(params[1])])
  });
}

// on connection to a new socket
io.on('connection', (socket => {

  // add button listeners
  button(socket)

  // when server receives a message on the init channel from the socket
  // set button values to what is stored in the particular status array
  socket.on('init', (msg) => {
   
    if(msg == 'regA') {
      io.emit('update', [msg, status_reg_a])
    } else if(msg == 'regB') {
      io.emit('update', [msg, status_reg_b])
    } else if(msg == 'obsA') {
      io.emit('update', [msg, status_obs_a])
    } else if(msg == 'obsB') {
      io.emit('update', [msg, status_obs_b])
    }
  });
}));