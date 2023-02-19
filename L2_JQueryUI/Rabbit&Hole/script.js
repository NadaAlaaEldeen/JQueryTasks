   $("#rabbit").on("mouseenter",function(){
          $("img").effect("shake","slow")

        })

    $("#rabbit").draggable({revert:false});
    $("#hole").droppable({
      drop: function( event, ui ){
        $("#rabbit").fadeOut(200)   
      } 
      })
