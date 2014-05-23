$(function() {

	$('body').scrollspy();
	$(".navbar").addClass("hideMenu");

	$(window).scroll(function(){
		$('#progressBar').removeClass("menu0 menu1 menu2 menu3 menu4 menu5 menu6 menu7 menu8 menu9 menu10").addClass( $("li.active").attr("id") );
		
		if($(document).scrollTop() > 10) {
			$(".navbar").removeClass("hideMenu");
		}else {
			
			$(".navbar").addClass("hideMenu");
		}

	});



	$(".menu-item > a").click(function(){
		var url = $(this).attr("href");
		url = url.split("#");
		url = "#"+url[1];
		$.scrollTo( url, 800 );
		return false;
	});

});