jQuery(document).ready(function(){

	setTimeout(typeWriter1, 3000);
	setTimeout(typeWriter2, 6000);


	$('body').ripples({
		resolution: 256,
		dropRadius: 20, //px
		perturbance: 0.04,
	});

    setTimeout(function(){
		var w = 0.5 * $('body').outerWidth();
		var h = 0.5 * $('body').outerHeight();
	    var dropRadius = 50;
	    var strength = 3;
		
		$('body').ripples('drop', w, h, dropRadius, strength)
	
	}, 10500);

	setTimeout(function(){   
		setInterval(function() {
			var x = Math.random() * $('body').outerWidth();
			var y = Math.random() * $('body').outerHeight();
			var dropRadius = 20;
			var strength = 0.04 + Math.random() * 0.04;

			$('body').ripples('drop', x, y, dropRadius, strength);
		}, 800);
    }, 13000);

	

// window.addEventListener('load', function() {

// })

});


var i = 0;
var txt = 'SILENCE'; 
var txt_1 = '        STRIKES LIKE A';
var speed = 120; 

function typeWriter1() {
	if (i < txt.length) {
		document.getElementById("silence").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter1, speed);
	}
}

function typeWriter2() {
	if (i < txt_1.length) {
		document.getElementById("silence").innerHTML += txt_1.charAt(i);
		i++;
		setTimeout(typeWriter2, speed);
	}
	if (i == txt_1.length - 1) {
		setTimeout(fade, 2000);
		setTimeout(appear, 3000);
	}

}

var opacity = 0.8;

function fade() {
	if (opacity > 0) {
		opacity -= .01;
		setTimeout(fade, 20);
	}
	document.getElementById('silence').style.opacity = opacity;
	
	
}


var opacity_1 = 0;

function appear() {
	if (opacity_1 < 0.8) {
		opacity_1 += .01;
		setTimeout(appear, 20);
	}
	document.getElementById('hurricane').style.opacity = opacity_1;

}



function pause(ms) {
	var d1 = new Date();
	var d2 = null;
	do {
		d2 = new Date();
	}
	while (d2 - d1 < ms);
}

