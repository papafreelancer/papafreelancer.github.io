

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}
$ ('#my_btn').hover(function(){
    $(this).css({
        top:getRandomInt(0, 200)+"px",
        left: getRandomInt(0, 700)+"px"
    });
}, function(){ });


$('.dark').click(function(){
    var $this = $(this);
    $this.toggleClass('.dark');
    if($this.hasClass('.dark')){
        $this.text('Dark Mode');			
    } else {
        $this.text('Light Mode');
    }
});
$(document).ready(function($){
    $('.pop-open').click(function(){
        $('.pop-up').fadeIn();
        return false;
    });

    $('.pop-up-close').click(function(){
        $(this).parents('.pop-up').fadeOut();
        return false;
    });

    $('.pop-up').click(function(e) {
		if ($(e.target).closest('.pop-up-unit').length == 0) {
			$(this).fadeOut();					
		}
    });
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});