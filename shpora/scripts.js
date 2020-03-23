$(document).ready(function(){
    $('.html').mouseenter(function(){
        $('.html_unit').fadeIn();
    });
    $('.html_unit, .html').mouseleave(function(){
        $('.html_unit').fadeOut();
    });
    $('.css').mouseenter(function(){
        $('.css_unit').fadeIn();
    });
    $('.css_unit, .css').mouseleave(function(){
        $('.css_unit').fadeOut();
    });
    $('.js').mouseenter(function(){
        $('.js_unit').fadeIn();
    });
    $('.js_unit, .js').mouseleave(function(){
        $('.js_unit').fadeOut();
    });
    $('.php').mouseenter(function(){
        $('.php_unit').fadeIn();
    });
    $('.php_unit, .php').mouseleave(function(){
        $('.php_unit').fadeOut();
    });
    $('.other').mouseenter(function(){
        $('.other_unit').fadeIn();
    });
    $('.other_unit, .other').mouseleave(function(){
        $('.other_unit').fadeOut();
    });
})