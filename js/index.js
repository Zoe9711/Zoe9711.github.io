jQuery(document).ready(function(){
    
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

});
