jQuery(document).ready(function(){


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




