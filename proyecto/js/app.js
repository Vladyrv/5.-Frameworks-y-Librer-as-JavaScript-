$(document).ready(function() {	
    var intervalID = window.setInterval(miFuncion, 3000);
    function miFuncion() {
        function cambiarColor() { 
            $(".main-titulo" ).animate({
                color: "#fff",
            }, 2000);
            $(".main-titulo" ).animate({
                color: "#fff029",
            }, 2000);
            //setInterval(cambiarColor, 3000); 
        });
    });     
})

