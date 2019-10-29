jQuery(document).ready(function(){

    appear();

    $('body').ripples({
      resolution: 256,
      dropRadius: 20, //px
      perturbance: 0.04,
    });

    setInterval(function() {
      var x = Math.random() * $('body').outerWidth();
      var y = Math.random() * $('body').outerHeight();
      var dropRadius = 20;
      var strength = 0.04 + Math.random() * 0.04;

      $('body').ripples('drop', x, y, dropRadius, strength);
    }, 400);

});


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

var opacity = 0;

function appear() {
    if (opacity < 1) {
        opacity += 0.01;
        setTimeout(appear, 20);
    }
    document.getElementById('container').style.opacity = opacity;
}
