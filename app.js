$(document).ready(function(){
	$(".work_title").hide();

	$(".work1").on("mouseenter", function(){
		$(".work1 .work_title").fadeIn();
		$(".work_descript").fadeIn();
	})
	$(".work1").on("mouseleave", function(){
		$(".work1 .work_title").fadeOut();
		$(".work_descript").fadeIn();
	})

	$(".work2").on("mouseenter", function(){
		$(".work2 .work_title").fadeIn();
		$(".work_descript").fadeIn();
	})
	$(".work2").on("mouseleave", function(){
		$(".work2 .work_title").fadeOut();
		$(".work_descript").fadeIn();
	})

	$(".work3").on("mouseenter", function(){
		$(".work3 .work_title").fadeIn();
		$(".work_descript").fadeIn();
	})
	$(".work3").on("mouseleave", function(){
		$(".work3 .work_title").fadeOut();
		$(".work_descript").fadeIn();
	})

	$(".work4").on("mouseenter", function(){
		$(".work4 .work_title").fadeIn();
		$(".work_descript").fadeIn();
	})
	$(".work4").on("mouseleave", function(){
		$(".work4 .work_title").fadeOut();
		$(".work_descript").fadeIn();
	})
});