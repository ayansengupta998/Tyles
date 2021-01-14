$(document).ready(function(){
    let passfield = $('#security');
    $("#pass-submit").on("click",function(){
        if(passfield.val()=="Covid2020$"){
            location.href="../RegistrationA.html"
        }
        else{
            let text = "";
            passfield.text(text);
            alert("Wrong Password, retry");
        }
    });  
});