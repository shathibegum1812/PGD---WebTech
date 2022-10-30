// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
	
	
	
}());

// Place any jQuery/helper plugins in here.
(function($){
	$(document).ready(function(){
		
	//*** MIXITUP ***//
	var containerEl = document.querySelector('.portfolios');
    var mixer = mixitup(containerEl);
	
	});
	//*** WOW ***//
	new WOW().init();	
	//*** COUNTERUP ***//
		$('.counter-content').appear(function(){
			$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
			
		});
		//*** PROGRESS BAR ***//
		
		$('.progress-bar-content').appear(function(){
			$('#progress-bar-1').circleProgress({
			value: 1,
			size: 200,
			fill: {
			  color: "#ffffff"
			},
			emptyFill: "rgba(0, 0, 0, .3)",
			animation: { duration: 3000, easing: "circleProgressEasing" }
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circular-inner').html(Math.round(100 * progress) + '<i>%</i>');
		  });
		  
		  $('#progress-bar-2').circleProgress({
			value: 0.9,
			size: 200,
			fill: {
			  color: "#ffffff"
			},
			emptyFill: "rgba(0, 0, 0, .3)",
			animation: { duration: 3000, easing: "circleProgressEasing" }
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circular-inner').html(Math.round(90 * progress) + '<i>%</i>');
		  });
		  
		  $('#progress-bar-3').circleProgress({
			value: 0.8,
			size: 200,
			fill: {
			  color: "#ffffff"
			},
			emptyFill: "rgba(0, 0, 0, .3)",
			animation: { duration: 3000, easing: "circleProgressEasing" }
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circular-inner').html(Math.round(80 * progress) + '<i>%</i>');
		  });
		  
		  $('#progress-bar-4').circleProgress({
			value: 0.7,
			size: 200,
			fill: {
			  color: "#ffffff"
			},
			emptyFill: "rgba(0, 0, 0, .3)",
			animation: { duration: 3000, easing: "circleProgressEasing" }
		  }).on('circle-animation-progress', function(event, progress) {
			$(this).find('.circular-inner').html(Math.round(70 * progress) + '<i>%</i>');
		  });
		});
		
		//*** TYPEWRITER ***//		
		var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	
	
	 //*** PRELOADER ***//
		$(window).on('load', function() { // makes sure the whole site is loaded 
		  $('#status').fadeOut(); // will first fade out the loading animation 
		  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
		  $('body').delay(350).css({'overflow':'visible'});
		});
	
}(jQuery));