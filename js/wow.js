jQuery(document).ready(function(){

    
    $('.wrapper').hover(function(){
        $('.right').stop().animate({width: '12vw'}, 400)
    }, function(){
        $('.right').stop().animate({width: '-0'}, 400)
    }
    );

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





// appear();

// showHide();

// var opacity = 0;
// function appear() {
//     if (opacity < 1) {
//         opacity += 0.01;
//         setTimeout(appear, 80);
//     }
//     document.getElementById('container').style.opacity = opacity;
// }


// function showHide() {
//     showHide1();
// }

// var index1 = 0;

// function showHide1() {
//     var i;
//     var x = document.getElementsByClassName('a1');
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = 'none';
//     }

//     if (index1 == x.length) {
//         index1 = 0;
//     }
//     x[index1].style.display = 'block';
//     index1++;
//     setTimeout(showHide1, 5000);
// }


