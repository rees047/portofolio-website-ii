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
});