(function( $ ) {
// Plugin definition.
$.fn.shrinkOnScroll = function( options ) {
    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var settings = $.extend( {}, $.fn.shrinkOnScroll.defaults, options );
 
    // Our plugin implementation code goes here.
    function topbarShrink(self){
	    $(settings.selector).toggleClass(settings.shrinkClass, $(self).scrollTop() > settings.distance)
	}

	$(document).ready(function () {
	    topbarShrink(this);
	    $(window).scroll(function () {
	        topbarShrink(this);
	    });
	});
 
};
 
// Plugin defaults – added as a property on our plugin function.
$.fn.shrinkOnScroll.defaults = {
    selector: '.tpt-shrinkOnScroll',
    shrinkClass: 'tpt-shrinkOnScrollShrink',
    distance: 50
};
})(jQuery);