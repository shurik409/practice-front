$(function(){
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