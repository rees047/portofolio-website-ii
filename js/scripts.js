function scrolltoView(){
    $('a[role]').click(function() {
        let target = $('#' + $(this).attr('target'));
        let navBarHeight = $('.nav-bar').height();
        $('html, body').animate({
            scrollTop: target.offset().top - navBarHeight
        }, 800);
    });
}


$( document ).ready(function() {
   scrolltoView();
    $('#modal-content').load('modal-content.html');

    let android_spacer = $('<div/>', {
        'class' : 'android_spacer'
    }).css({
        'width'  : '100%',
        'height' :  '200px'
    }).appendTo($('#contact'));
    
    $('#contact textarea').on('focus', function() {
        $(this).after(android_spacer);
    });
    
    $('#contact textarea').on('blur', function() {
        $('.android_spacer').remove();
    });

});