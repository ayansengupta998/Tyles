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

function button(socket) {
  //button1
  socket.on('button1', (msg) => {
    console.log('test')
    if(msg == "regA") {
      io.emit('button1', msg);
      status_reg_a[0] = !status_reg_a[0];

    } else if(msg == "regB") {

      io.emit('button1', msg);
      status_reg_a[0] = !status_reg_a[0];

    }
    });
  //button2
  socket.on('button2', (msg) => {
    if(msg == "regA") {

      io.emit('button2', msg);
      status_reg_a[1] = !status_reg_a[1];

    } else if(msg == "regB") {

      io.emit('button2', msg);
      status_reg_b[1] = !status_reg_b[1];

    }
  });
  //button3
  socket.on('button3', (msg) => {
    if(msg == "regA") {

      io.emit('button3', msg);
      status_reg_a[2] = !status_reg_a[2];

    } else if(msg == "regB") {

      io.emit('button3', msg);
      status_reg_b[2] = !status_reg_b[2];

    }
  });
  //button4
  socket.on('button4', (msg) => {
    if(msg == "regA") {

      io.emit('button4', msg);
      status_reg_a[3] = !status_reg_a[3];

    } else if(msg == "regB") {

      io.emit('button4', msg);
      status_reg_b[3] = !status_reg_b[3];

    }
  });
  //button5
  socket.on('button5', (msg) => {
    if(msg == "regA") {

      io.emit('button5', msg);
      status_reg_a[4] = !status_reg_a[4];

    } else if(msg == "regB") {

      io.emit('button5', msg);
      status_reg_b[4] = !status_reg_b[4];

    }
  });
  //button6
  socket.on('button6', (msg) => {
    if(msg == "regA") {

      io.emit('button6', msg);
      status_reg_a[5] = !status_reg_a[5];

    } else if(msg == "regB") {

      io.emit('button6', msg);
      status_reg_b[5] = !status_reg_b[5];

    }
  });
  //button7
  socket.on('button7', (msg) => {
    if(msg == "regA") {

      io.emit('button7', msg);
      status_reg_a[6] = !status_reg_a[6];

    } else if(msg == "regB") {

      io.emit('button7', msg);
      status_reg_b[6] = !status_reg_b[6];

    }
  });
  //button8
  socket.on('button8', (msg) => {
    console.log(msg)
    if(msg == "regA") {
      console.log(status_reg_a[7])
      io.emit('button8', msg);
      status_reg_a[7] = !status_reg_a[7];

    } else if(msg == "regB") {
      console.log(status_reg_a[7])
      io.emit('button8', msg);
      status_reg_b[7] = !status_reg_b[7];

    }
  });
  //button9
  socket.on('button9', (msg) => {
    if(msg == "regA") {

      io.emit('button9', msg);
      status_reg_a[8] = !status_reg_a[8];

    } else if(msg == "regB") {

      io.emit('button9', msg);
      status_reg_b[8] = !status_reg_b[8];

    }
  });
  //button10
  socket.on('button10', (msg) => {
    if(msg == "regA") {

      io.emit('button10', msg);
      status_reg_a[9] = !status_reg_a[9];

    } else if(msg == "regB") {

      io.emit('button10', msg);
      status_reg_b[9] = !status_reg_b[9];

    }
  });
  //button11
  socket.on('button11', (msg) => {
    if(msg == "regA") {

      io.emit('button11', msg);
      status_reg_a[10] = !status_reg_a[10] ;

    } else if(msg == "regB") {

      io.emit('button11', msg);
      status_reg_b[10] = !status_reg_b[10] ;

    }
  });
  //button12
  socket.on('button12', (msg) => {
    if(msg == "regA") {

      io.emit('button12', msg);
      status_reg_a[11] = !status_reg_a[11];

    } else if(msg == "regB") {

      io.emit('button12', msg);
      status_reg_b[11] = !status_reg_b[11];

    }
  });
}
 // ./app.js
   


  
  //listen on every connection
//reg a
io.on('connection', (socket) => {
  button(socket)
  socket.on('room', (msg) => {
      
    socket.leaveAll()
   
    if(msg == 'regA') {
  
      for(i = 0; i < status_reg_a.length; i++)
      {
        if(status_reg_a[i])
          io.emit('button' + (i + 1), msg);
      }
    } else if(msg == 'regB') {
      for(i = 0; i < status_reg_b.length; i++)
      {
        if(status_reg_b[i])
          io.emit('button' + (i + 1), msg);
      }
    }
    
  });
});
  //io.on('connection', (socket) => {
  //  socket.on('button1', (msg) => {
  //    

  //  });
  //});