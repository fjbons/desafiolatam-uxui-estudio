const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* var enviar = $("h1");
enviar.dblclick(function (){
    $("h1").css({"color": "red"});
}); */

var ingredientes = $( ".ingredientes" )

ingredientes.on( "dblclick", function() {
    $(".ingredientes").css({"color": "red"} );
  });

  $( ".preparacion" ).on( "dblclick", function() {
     $(".preparacion").css({"color": "red"}) ;
  });

  $( ".titulo" ).on( "click", function() {
    $( ".parrafo" ).toggle();
  });




