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
        $('.type-search').attr('value',LinkText);
        $('#list').slideUp();

        return false;
    });
    $(window).click(function(){

        $('#list').slideUp();
    });
});