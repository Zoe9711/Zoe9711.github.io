jQuery(document).ready(function(){


    $('h1').ripples({
      resolution: 256,
      dropRadius: 20, //px
      perturbance: 0.04,
    });

    setInterval(function() {
      var x = Math.random() * $('h1').outerWidth();
      var y = Math.random() * $('h1').outerHeight();
      var dropRadius = 20;
      var strength = 0.04 + Math.random() * 0.04;

      $('h1').ripples('drop', x, y, dropRadius, strength);
    }, 200);

});




