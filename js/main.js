
$(function(){
	
})

$(document).ready(function(){



// !!!!!!SOCIALS!!!!!!!!!!!

$('#facebook a').attr('href', 'http://facebook.com');
$('#twitter a').attr('href', 'http://twitter.com');
$('#utube a').attr('href', 'http://youtube.com');

// !!!!!! DROPDOWN MENU  !!!!!!!!!!!

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		
		var links = this.el.find('.link');
	
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});


// SLIDER

let slides = [
  "img/slide1.jpg",
  "img/slide2.jpg",
  "img/slide3.jpg",
];

$("#mySlider").slidesbg({
  dataSlide: slides,
			keyboard: true,
});


$('[style*="slide1"]').append('<h1 class="heading">ЗАГОЛОВОК</h1>');
// $('[style*="slide2"]').append('<h1 class="heading2">ЗАГОЛОВОК2</h1>');
// $('[style*="slide3"]').append('<h1 class="heading3">ЗАГОЛОВОК3</h1>');


$('.newsHead li').css({"padding-bottom": "22px"});
$('.newsHead li:last-child').css({'opacity': '0.5'});
$('.copyright p:last-child').css({'opacity': '0.5'});

// !!!!!!!!!!SECTION UA!!!!!!!!!!!!!

$("a[href^='#UA']").click(function(){
		$('body, html').animate(
		{
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 600)
	})



$('.newsHead a').hover(function(){
	$('.newsContent').eq($(this).index()).css({'visibility': 'visible'}).fadeIn('fast', "linear")
},function(){
	$('.newsContent').eq($(this).index()).fadeOut('fast');
});


$('.tab').eq(0).css({'display': 'block'})
$('.teams').addClass('active');



$('.upperItems li').click(function(){
	$('.upperItems li').removeClass('active');
	$('.tab').fadeOut(200);
	$(this).addClass('active');
		for(var i =1; i< $('.tab').length;i++){
			$('.tab').eq($(this).index()).fadeIn(200);
		}
	})



$(".btn").click(function () {
                $.ajax({
                    type: "GET",
                    url: "news.html",
                    success: function (data) {
                        $(".newsHead").append(data);
                        $('.newsHead li').css({'opacity': '1', "padding-bottom": "5px"});
                        $('.newsHead li:last-child').css({'opacity': '0.5'});
                        $('.newsHead li').css({"padding-bottom": "22px"});
						$('.newsStream').css({"overflow": "scroll"});
                    }
                });
            });

$(".btnVid").click(function () {
                $.ajax({
                    type: "GET",
                    url: "video.html",
                    success: function (data) {
                        $(".vidItems").append(data);
                        $('.videoStream').css({"overflow": "scroll"});
                    }
                });
            });

$(".btnTab").click(function () {
                $.ajax({
                    type: "GET",
                    url: "nationalTeams.html",
                    success: function (data) {
                        $(".lowerItems").append(data);
                        $('.tab').css({"overflow": "scroll"});
                    }
                });
            });


$('form button').hover(function(){
	$('input').fadeIn('fast', "linear")
	
})


})