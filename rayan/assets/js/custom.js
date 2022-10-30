 (function($){
	 $(document).ready(function(){
		
	 
  //*** SCROLL TO TOP
		window.onscroll = function() {scrollFunction(),headerFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("myBtn").style.display = "block";
			} else {
				document.getElementById("myBtn").style.display = "none";
			}
		};		
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		};
		$('#myBtn').on('click', function(){
			topFunction();
		});
			
		//*** HEADER ***//
		function headerFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				 var element = document.getElementById("header");
					element.classList.add("header-style");
			} else {
				var element = document.getElementById("header");
					element.classList.remove("header-style");
			}
		};
		
		//*** SMOTH SCROLLING ***//
		jQuery(".nav a").on('click', function(event) {
				if (this.hash !== ""){
					  event.preventDefault();
					  var hash = this.hash;
					  jQuery('html, body').animate({
						scrollTop: $(hash).offset().top
					}, 900, function(){
						window.location.hash = hash;
					});
				}
			});
			
		//*** MAGNIFIC POPUP ***//
		$('.popup-img').magnificPopup({
			type:'image',
			gallery:{
				enabled:true
			}
		});
		
		
			
		
 
  });
  
 }(jQuery));

 