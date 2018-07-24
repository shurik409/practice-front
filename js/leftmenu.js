$(function(){
   
    $( "#menu" ).on( "click", function() {
        if($("#menu").prop("checked") ){
            $(".off-canvas").css("left","0");
            $(".content").css("padding-left","267px");
        }
        else if(!$("#menu").prop("checked")){
            $(".off-canvas").css("left","-20em");
            $(".content").css("padding-left","0");
        }
        
    });
    $(window).resize(function() {

        if(!window.matchMedia('(max-width: 740px)').matches){
                $(".off-canvas").css("left","0");
                $(".content").css("padding-left","267px");
                //$("p").text($(window).width());
                $("#menu").prop("checked",false); 
        }
        else if(window.matchMedia('(max-width: 740px)').matches && !$("input").prop("checked")){
            $(".off-canvas").css("left","-20em");
            $(".content").css("padding-left","0");
            
        }
    });
    $('body').on('click','.close_button',function(){
        $("#menu").prop("checked",false);
        $(".off-canvas").css("left","-20em");
        $(".content").css("padding-left","0");
    });

});