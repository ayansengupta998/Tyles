let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;

let button_one = document.getElementById('one');
let button_two = document.getElementById('two');
let button_three = document.getElementById('three');
let button_four = document.getElementById('four');
let button_five = document.getElementById('five');
let button_six = document.getElementById('six');
let button_seven = document.getElementById('seven');
let button_eight = document.getElementById('eight');
let button_nine = document.getElementById('nine');
let button_ten= document.getElementById('ten');
let button_eleven = document.getElementById('eleven');
let button_twelve = document.getElementById('twelve');

let buttons = [button_one, button_two, button_three, button_four, button_five, button_six, button_seven, button_eight, button_nine, button_ten, button_eleven, button_twelve]
let counts = [count1, count2, count3, count4, count5, count6, count7, count8, count9, count10, count11, count12]


var button_status = [false, false, false, false, false, false, false, false, false, false, false, false];
console.log(button_status[0])
var socket = io();


socket.emit('init', 'obsA')

socket.on('update', (s) => {
    button_status = s
    console.log(button_status)
    for(let i = 0; i < 12; i++) {

        console.log(button_status[i])
        if(button_status[i] == true)
        {
            buttons[i].style.backgroundColor ="#881c1c"
        } else {    
            buttons[i].style.backgroundColor ="#8f8d8d";   
        }
    }
});

let room = "obsA"

function button_press(n, x)
{
    if(x==1)
    {
        counts[n] = counts[n] + 1
    }
    if(counts[n] == 1)
    {
        buttons[n].style.backgroundColor ="#881c1c"
    }
    else if(counts[n] == 2)
    {
        buttons[n].style.backgroundColor ="#8f8d8d";
        counts[n] =0;
    }
}

function emit_info(button)
{
    return [!button_status[button - 1], room]
}

$(function () {
    var socket = io();
    //button 1
    $('#one').click(function(e){
        console.log(emit_info(1))
        socket.emit('button1', emit_info(1))
    });
    socket.on('button1', function(params){
      if(params[1] == room && params[0] == counts[0])
      {
        button_press(0, 1);
        console.log(count1);
      }
    });
    //button 2
    $('#two').click(function(e){
    
        socket.emit('button2',emit_info(2))
        console.log('emitted')
        return false;
    });
    socket.on('button2', function(params){
      if(params[1] == room && params[0] == counts[1])
      {
        button_press(1, 1);
        console.log(count2);
      }
    });
    //button 3
    $('#three').click(function(e){
    
            socket.emit('button3',emit_info(3))
            console.log('emitted')
            return false;
        
    });
    socket.on('button3', function(params){
      if(params[1] == room && params[0] == counts[2])
      {
        button_press(2, 1);
        console.log(count3);
      }
    });
    //button 4
    $('#four').click(function(e){

        socket.emit('button4',emit_info(4))
        console.log('emitted')
        return false;
    });
    socket.on('button4', function(params){
        if(params[1] == room && params[0] == counts[3])
        {
            button_press(3, 1);
            console.log(count4);
        }
    });
    //button 5
    $('#five').click(function(e){
    
        socket.emit('button5',emit_info(5))
        console.log('emitted')
        return false;
    });
    socket.on('button5', function(params){
        if(params[1] == room && params[0] == counts[4])
        {
            button_press(4, 1);
            console.log(count5);
        }
    });
    //button 6
    $('#six').click(function(e){
    
        socket.emit('button6', emit_info(6))
        console.log('emitted')
        return false;
    });
    socket.on('button6', function(params){
        if(params[1] == room && params[0] == counts[5])
        {
            button_press(5, 1);
            console.log(count6);
        }
    });
    //button 7
    $('#seven').click(function(e){
    
        socket.emit('button7',emit_info(7))
        console.log('emitted')
        return false;
        
    });
    socket.on('button7', function(params){
      if(params[1] == room && params[0] == counts[6])
      {
        button_press(6, 1);
        console.log(count7);
      }
    });
    //button 8
    $('#eight').click(function(e){
    
        socket.emit('button8',emit_info(8))
        console.log('emitted')
        return false;
    });
    socket.on('button8', function(params){
      if(params[1] == room && params[0] == counts[0])
      {
        button_press(7, 1);
        console.log(count8);
      }
    });
    //button 9
    $('#nine').click(function(e){
    
        socket.emit('button9',emit_info(9))
        return false;
    });
    socket.on('button9', function(params){
      if(params[1] == room && params[0] == counts[7])
      {
          button_press(8, 1);
      }
    });
    //button 10
    $('#ten').click(function(e){

        socket.emit('button10',emit_info(10))
        return false;
    });
    socket.on('button10', function(params){
        if(params[1] == room && params[0] == counts[8])
        {
            button_press(9, 1);
        }
    });
    //button 11
    $('#eleven').click(function(e){
    
        socket.emit('button11', emit_info(11))
        return false;
    });
    socket.on('button11', function(params){
        if(params[1] == room && params[0] == counts[9])
        {
            button_press(10, 1);
        }
    });
    //button 12
    $('#twelve').click(function(e){
    
        socket.emit('button12', emit_info(12))
        return false;
    });
    socket.on('button12', function(params){
        if(params[1] == room && params[0] == counts[10])
        {
            button_press(11, 1);
        }
    });

    

  });