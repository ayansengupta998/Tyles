$(document).ready(function(){
    let passfield = $('#security');
    $("#pass-submit").click(function(){
        if(passfield.val()=="Covid2020$"){
            location.href="../RegistrationA.html"
        }
        else{
            let text = "";
            passfield.text(text);
            alert("Wrong Password, retry");
        }
    });  
    passfield.keypress(function(event) {
        if(event.which == 13) {
            $("#pass-submit").click();
            console.log("hi")
        }
    });
    
});