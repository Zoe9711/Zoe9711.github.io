var count = 1
setInterval(function () {
    var prev = $('#img-' + count);
    prev.fadeOut(1200);


    count++;
    if (count > 2) {
        count = 1
    }

    var next = $('#img-' + count);
    next.fadeIn(1200);
}, 4000);