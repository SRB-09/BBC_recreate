// document.querySelector(".btn").addEventListener("click", function(){
//     if (".btn".Attr("input", "type") ==="password"){
//         document.querySelector(".btn".attr("input", "type")="text");
//     }

    
// });



$("#show-password").click(function(Event){
    Event.preventDefault();
    if ($("#password").attr("type") === "password"){
        $("#password").attr("type", "text");
        }
    else{
        $("#password").attr("type", "password");
    }
});



