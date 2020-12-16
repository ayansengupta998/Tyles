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
var socket = io();
function button_press1(x){
    var x;
if(x==1){
   count1 =count1 +1;
}
if(count1 == 1){
    button_one.style.backgroundColor ="#881c1c";
}
else if(count1 == 2){
    button_one.style.backgroundColor ="#8f8d8d";
    count1 =0;

}



}
function button_press2(x){
    var x;
if(x==1){
   count2 =count2 +1;
}
if(count2 == 1){
    button_two.style.backgroundColor ="#881c1c";
}
else if(count2 == 2){
    button_two.style.backgroundColor ="#8f8d8d";
    count2 =0;

}

}
function button_press3(x){
    var x;
if(x==1){
   count3 =count3 +1;
}
if(count3 == 1){
    button_three.style.backgroundColor ="#881c1c";
}
else if(count3 == 2){
    button_three.style.backgroundColor ="#8f8d8d";
    count3 =0;

}

}
function button_press4(x){
    var x;
if(x==1){
   count4 =count4 +1;
}
if(count4 == 1){
    button_four.style.backgroundColor ="#881c1c";
}
else if(count4 == 2){
    button_four.style.backgroundColor ="#8f8d8d";
    count4 =0;

}

}
function button_press5(x){
    var x;
if(x==1){
   count5 =count5 +1;
}
if(count5 == 1){
    button_five.style.backgroundColor ="#881c1c";
}
else if(count5 == 2){
    button_five.style.backgroundColor ="#8f8d8d";
    count5 =0;

}

}
function button_press6(x){
    var x;
if(x==1){
   count6 =count6 +1;
}
if(count6 == 1){
    button_six.style.backgroundColor ="#881c1c";
}
else if(count6 == 2){
    button_six.style.backgroundColor ="#8f8d8d";
    count6 =0;

}

}
function button_press7(x){
    var x;
if(x==1){
   count7 =count7 +1;
}
if(count7 == 1){
    button_seven.style.backgroundColor ="#881c1c";
}
else if(count7 == 2){
    button_seven.style.backgroundColor ="#8f8d8d";
    count7 =0;

}

}
function button_press8(x){
    var x;
if(x==1){
   count8 =count8 +1;
}
if(count8 == 1){
    button_eight.style.backgroundColor ="#881c1c";
}
else if(count8 == 2){
    button_eight.style.backgroundColor ="#8f8d8d";
    count8 =0;

}

}
function button_press9(x){
    var x;
if(x==1){
   count9 =count9 +1;
}
if(count9 == 1){
    button_nine.style.backgroundColor ="#881c1c";
}
else if(count9 == 2){
    button_nine.style.backgroundColor ="#8f8d8d";
    count9 =0;

}

}
function button_press10(x){
    var x;
if(x==1){
   count10 =count10 +1;
}
if(count10 == 1){
    button_ten.style.backgroundColor ="#881c1c";
}
else if(count10 == 2){
    button_ten.style.backgroundColor ="#8f8d8d";
    count10 =0;

}

}
function button_press11(x){
    var x;
if(x==1){
   count11 =count11 +1;
}
if(count11 == 1){
    button_eleven.style.backgroundColor ="#881c1c";
}
else if(count11 == 2){
    button_eleven.style.backgroundColor ="#8f8d8d";
    count11 =0;

}

}
function button_press12(x){
    var x;
if(x==1){
   count12 =count12 +1;
}
if(count12 == 1){
    button_twelve.style.backgroundColor ="#881c1c";
}
else if(count12 == 2){
    button_twelve.style.backgroundColor ="#8f8d8d";
    count12 =0;

}

}
$(function () {
    var socket = io();
    //button 1
    $('#one').click(function(e){
    
        socket.emit('button1', '13');
        console.log('emitted')
        return false;
    });
    socket.on('button1', function(msg){
      button_press1(1);
      console.log(count1);
    });
    //button 2
    $('#two').click(function(e){
    
        socket.emit('button2', '13');
        console.log('emitted')
        return false;
    });
    socket.on('button2', function(msg){
      button_press2(1);
      console.log(count2);
    });
    //button 3
    $('#three').click(function(e){
    
        socket.emit('button3', '13');
        console.log('emitted')
        return false;
    });
    socket.on('button3', function(msg){
      button_press3(1);
      console.log(count3);
    });
    //button 4
    $('#four').click(function(e){

        socket.emit('button4', '13');
        console.log('emitted')
        return false;
    });
    socket.on('button4', function(msg){
        button_press4(1);
        console.log(count4);
    });
    //button 5
    $('#five').click(function(e){
    
        socket.emit('button5', '15');
        console.log('emitted')
        return false;
    });
    socket.on('button5', function(msg){
        button_press5(1);
        console.log(count5);
    });
    //button 6
    $('#six').click(function(e){
    
        socket.emit('button6', '16');
        console.log('emitted')
        return false;
    });
    socket.on('button6', function(msg){
        button_press6(1);
        console.log(count6);
    });
    //button 7
    $('#seven').click(function(e){
    
        socket.emit('button7', '73');
        console.log('emitted')
        return false;
    });
    socket.on('button7', function(msg){
      button_press7(1);
      console.log(count7);
    });
    //button 8
    $('#eight').click(function(e){
    
        socket.emit('button8', '13');
        console.log('emitted')
        return false;
    });
    socket.on('button8', function(msg){
      button_press8(1);
      console.log(count8);
    });
    //button 9
    $('#nine').click(function(e){
    
        socket.emit('button9', '19');
        console.log('emitted')
        return false;
    });
    socket.on('button9', function(msg){
      button_press9(1);
      console.log(count9);
    });
    //button 10
    $('#ten').click(function(e){

        socket.emit('button10', '13');
        console.log('emitted')
        return false;
    });
    socket.on('button10', function(msg){
        button_press10(1);
        console.log(count10);
    });
    //button 11
    $('#eleven').click(function(e){
    
        socket.emit('button11', '111');
        console.log('emitted')
        return false;
    });
    socket.on('button11', function(msg){
        button_press11(1);
        console.log(count11);
    });
    //button 12
    $('#twelve').click(function(e){
    
        socket.emit('button12', '112');
        console.log('emitted')
        return false;
    });
    socket.on('button12', function(msg){
        button_press12(1);
        console.log(count12);
    });

    

  });