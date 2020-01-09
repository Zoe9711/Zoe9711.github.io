jQuery(document).ready(function(){

    
    $('.wrapper').hover(function(){
        $('.right').stop().animate({width: '12vw'}, 400)
    }, function(){
        $('.right').stop().animate({width: '-0'}, 400)
    }
    );

    // $('body').ripples({
    //   resolution: 256,
    //   dropRadius: 20, //px
    //   perturbance: 0.04,
    // });

    // setInterval(function() {
    //   var x = Math.random() * $('body').outerWidth();
    //   var y = Math.random() * $('body').outerHeight();
    //   var dropRadius = 20;
    //   var strength = 0.04 + Math.random() * 0.04;

    //   $('body').ripples('drop', x, y, dropRadius, strength);
    // }, 400);


  const distanceToNextImage = -72;
  let currentImageNumber = 0;

  $(".imgcontainer").hide();
  $(".Azeroth").show();
  $(".lightbox").hide();

  //maps
  $(".map.Azeroth").click(function() {
    $(".imgcontainer").hide();
    $(".Azeroth").show();
    // $(".lightbox").hide();
  });
  
  $(".map.Cataclysm").click(function() {
    $(".imgcontainer").hide();
    $(".Cataclysm").show();
    // $(".lightbox").hide();
  });

  $(".map.KulTiras").click(function() {
    $(".imgcontainer").hide();
    $(".KulTiras").show();
    // $(".lightbox").hide();
  });

  $(".map.Nazjatar").click(function() {
    $(".imgcontainer").hide();
    $(".Nazjatar").show();
    // $(".lightbox").hide();
  });
  
  $(".map.Northrend").click(function() {
    $(".imgcontainer").hide();
    $(".Northrend").show();
    // $(".lightbox").hide();
  });

  $(".map.Legion").click(function() {
    $(".imgcontainer").hide();
    $(".Legion").show();
    // $(".lightbox").hide();
  });

  $(".map.Outland").click(function() {
    $(".imgcontainer").hide();
    $(".Outland").show();
    // $(".lightbox").hide();
  });

  $(".map.Pandaria").click(function() {
    $(".imgcontainer").hide();
    $(".Pandaria").show();
    // $(".lightbox").hide();
  });

  $(".map.Zandalar").click(function() {
    $(".imgcontainer").hide();
    $(".Zandalar").show();
    // $(".lightbox").hide();
  });

  //
  $(".item").click(function() {
    currentImageNumber = parseInt($(this).attr("id"), 10);
    $("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "vw");
    $(".lightbox").show();
  });

  //Left and right
  $("#right").click(function() {
    currentImageNumber = (currentImageNumber + 1) % 88;
    $("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "vw");
  });

  $("#left").click(function() {
    currentImageNumber = currentImageNumber == 0 ? 87 : (currentImageNumber - 1);
    $("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "vw");
  });
	
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$(".lightbox").hide();
	});

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


