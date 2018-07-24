$(function(){

    $( "#menu" ).on( "click", function() {
        if($("#menu").prop("checked") ){
            $(".registration input").css("float","none");
            $("[type='save']").css({
                'float': "none",
                'margin-left': "0"
            });
            $("[type='cancel']").css({
                "float": "none",
                "margin-right": "0"
            });
        }
        else if(!$("#menu").prop("checked")){
            $(".registration input").css("float","right");
            $("[type='save']").css({
                'float': "left",
                'margin-left': "15px"
            });
            $("[type='cancel']").css({
                "float": "right",
                "margin-right": "15px"
            });
        }
        
    });
    $(window).resize(function() {
        
        if(!window.matchMedia('(max-width: 740px)').matches){
            $(".registration input").css("float","right");
            $("[type='save']").css({
                'float': "left",
                'margin-left': "15px"
            });
            $("[type='cancel']").css({
                "float": "right",
                "margin-right": "15px"
            });
        }
        else if(window.matchMedia('(max-width: 740px)').matches && !$("input").prop("checked")){
            $(".registration input").css("float","right");
            
            $("[type='save']").css({
                'float': "left",
                'margin-left': "15px"
            });
            $("[type='cancel']").css({
                "float": "right",
                "margin-right": "15px"
            });
            
        }
    });
    $('body').on('click','.close_button',function(){
        $(".registration input").css("float","right");
        $("[type='save']").css({
            'float': "left",
            'margin-left': "15px"
        });
        $("[type='cancel']").css({
            "float": "right",
            "margin-right": "15px"
        });
    });
});