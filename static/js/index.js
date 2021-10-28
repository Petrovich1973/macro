$(document).ready(function(){
    $('.photo').zoom({url: 'static/media/pic_001.jpg', magnify: 2});
    // try {
    //     document.querySelector('.threesixty-frame[data-index="0"]').click();
    // } catch {
    //     setTimeout(function() {
    //         document.querySelector('.threesixty-frame[data-index="0"]').click();
    //     }, 100)
    // }
    $('.threesixty').threeSixty({

        // horizontal OR vertical
        dragDirection: 'horizontal',

        // use arrow keys
        useKeys: true,

        // is draggable?
        draggable: true

    });

    $( ".copy-link" ).click(function() {
        navigator.clipboard.writeText($(this).attr('data-link'));
    });
});
