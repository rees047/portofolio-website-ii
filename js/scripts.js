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
    let url = document.location.href + '/modal-content.html';
    //check if # is present, if yes then delete
    console.log(url);
    $('#modal-content').load(url);
});