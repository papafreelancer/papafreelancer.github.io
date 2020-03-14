

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1 )) + min;
}
$ ('#my_btn').hover(function(){
    $(this).css({
        top:getRandomInt(0, 200)+"px",
        left: getRandomInt(0, 700)+"px"
    });
}, function(){ });

// $('#color_btn').click(function(){
//     $("#color_btn").text("Light Mode");
// });
$('.dark').click(function(){
    var $this = $(this);
    $this.toggleClass('.dark');
    if($this.hasClass('.dark')){
        $this.text('Dark Mode');			
    } else {
        $this.text('Light Mode');
    }
});
