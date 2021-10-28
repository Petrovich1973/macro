$(document).ready(function(){
    $('.photo').zoom({url: 'static/media/pic_001.jpg', magnify: 2});
    $('.threesixty').threeSixty({

        // horizontal OR vertical
        dragDirection: 'horizontal',

        // use arrow keys
        useKeys: true,

        // is draggable?
        draggable: true

    });
});
