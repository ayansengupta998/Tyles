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

// array of button elements on page and their count, their current state
let buttons = [button_one, button_two, button_three, button_four, button_five, button_six, button_seven, button_eight, button_nine, button_ten, button_eleven, button_twelve]

// set button status to false -- keeps track locally of the state
var button_status = [false, false, false, false, false, false, false, false, false, false, false, false];

// set up socket
var socket = io();

// emit init message
socket.emit('init', 'obsA')

// string ot hold page string
let room = "obsA"

// when it receives an update message, take the new status array, and update each button to reflect it
socket.on('update', (params) => {
    msg = params[0]
    if(msg == room) {
        button_status = params[1]
        console.log(button_status);
        for(let i = 0; i < 12; i++) {

            console.log(button_status[i])
            if(button_status[i] == true)
            {
                buttons[i].style.backgroundColor ="#881c1c"
            } else {    
                buttons[i].style.backgroundColor ="#8f8d8d"  
            }
        }
    }
});

// return an array with the new button status and the page string
function emit_info(button)
{
    return [!button_status[button - 1], room]
}

// on click listeners to emit to the server to change button status
$(function () {
    var socket = io();
    //button 1
    $('#one').click(function(e){
        socket.emit('button1', emit_info(1))
    });
    //button 2
    $('#two').click(function(e){
        socket.emit('button2',emit_info(2))
    });
    //button 3
    $('#three').click(function(e){
        socket.emit('button3',emit_info(3))
    });
    //button 4
    $('#four').click(function(e){
        socket.emit('button4',emit_info(4))
    });
    //button 5
    $('#five').click(function(e){
        socket.emit('button5',emit_info(5))
    });
    //button 6
    $('#six').click(function(e){
    
        socket.emit('button6', emit_info(6))
    });
    //button 7
    $('#seven').click(function(e){
        socket.emit('button7',emit_info(7))
    });
    //button 8
    $('#eight').click(function(e){
        socket.emit('button8',emit_info(8))
    });
    //button 9
    $('#nine').click(function(e){
        socket.emit('button9',emit_info(9))
    });
    //button 10
    $('#ten').click(function(e){
        socket.emit('button10',emit_info(10))
    });
    //button 11
    $('#eleven').click(function(e){
        socket.emit('button11', emit_info(11))
    });
    //button 12
    $('#twelve').click(function(e){
        socket.emit('button12', emit_info(12))
    });
});