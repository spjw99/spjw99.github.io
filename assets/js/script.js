$(document).ready(function() {
    $('.mobile-menu-btn').on('click',function(e){
        e.preventDefault();
        var active_flag=$(this).hasClass('active');
        if(active_flag){
            $('.main-nav').hide();
            $(this).removeClass('active');
        }else{
            $('.main-nav').show();
            $(this).addClass('active');
        }
    })
})