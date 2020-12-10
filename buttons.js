var stations_occupied = new Array(12).fill(false);
console.log(stations_occupied);

var buttons = document.getElementsByClassName("button");
console.log(buttons);
for (i = 0; i < buttons.length; i++)
{
    // this is bad, since i = 12 at the end it makes them all 12 hahaha
    buttons[i].onclick = function() {changeStatus(i)};
}

function changeStatus(station_number)
{
    console.log(station_number);
    stations_occupied[station_number] = !stations_occupied[station_number];
    console.log(stations_occupied);
}