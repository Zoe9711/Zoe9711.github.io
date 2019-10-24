jQuery(document).ready(function(){


	// pause(4000);

	$('body').ripples({
		resolution: 256,
		dropRadius: 20, //px
		perturbance: 0.04,
	});
	
setInterval(function() {
	var $el = $('body');
	var x = Math.random() * $el.outerWidth();
	var y = Math.random() * $el.outerHeight();
	var dropRadius = 20;
	var strength = 0.04 + Math.random() * 0.04;

	$el.ripples('drop', x, y, dropRadius, strength);
}, 4000);

// window.addEventListener('load', function() {

// })

});

function pause(ms) {
	var d1 = new Date();
	var d2 = null;
	do {
		d2 = new Date();
	}
	while (d2 - d1 < ms);
}

