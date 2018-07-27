$(function(){
    $('[type="users"]').click(function(){
        if($('.names').css('visibility') == 'hidden'){
         $('.names').css({
             'visibility':'visible',
             'opacity':'1'
         });
         $('[type="users"]').css({
             'background':'#36b871',
             'color':'white'
         });
         $('[type="users"]').hover(function(){
             $('[type="users"]').css({
                 'background':'white',
                 'color':'black'
             });
         },function(){
             $('[type="users"]').css({
                 'background':'#36b871',
                 'color':'white'
             });
         });
        }
        else{
         $('.names').css({
             'visibility':'hidden',
             'opacity':'0'
         });
         $('[type="users"]').css({
             'background':'white',
             'color':'black'
         });
         $('[type="users"]').hover(function(){
             $('[type="users"]').css({
                 'background':'#36b871',
                 'color':'white'
             });
         },function(){
             $('[type="users"]').css({
                 'background':'white',
                 'color':'black'
             });
         });
        }
    });

    $('.type-search').on('input propertychange',function(){
        if($(this).val() != ''){
            $('#list').slideDown();
        }
        else if($(this).val() == ''){
            $('#list').slideUp();
        }
    });
    $('.list_val').click(function(){
        var LinkText = $(this).text();
        var nowText = $('.type-search').val().split(',');
        nowText.splice(nowText.length-1,1,' ');
        var text = nowText.join(',');
        $('.type-search').attr('value',text  + LinkText + ",");
        $('#list').slideUp();

        return false;
    });
    $(window).click(function(){

        $('#list').slideUp();
    });
});

