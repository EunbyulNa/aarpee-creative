$(document).ready(function () {

//scroll chagedbar

var $headerTop = $('header').offset().top;
$(window).scroll(function () {

  var widthS = $(window).innerWidth();
  var scroll = $(window).scrollTop();
if(scroll  > $headerTop && widthS > 600 ) {
$('#header').hide();
$('#chagedBar').show();
}else {
 $('#header').show();
$('#chagedBar').hide();
}
});




$(".active").click(function(event){
    event.preventDefault();
    $('html,body').animate(
      {scrollTop:$(this.hash).offset().top}, 500);

        });


        $('nav li a').click(function () {
          $('nav li a').removeClass('active');
          $(this).addClass('active');

        });

//slideshow Slick
  $('#reviews').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    slidesToShow:1
  });



//ham_btn

var btn_menu = 0;

$('.hbg_btn').click(function(){
  if( btn_menu == 0 ){
    $('.hbg_btn span:nth-child(1)').css('transform','rotate(45deg)');
    $('.hbg_btn span:nth-child(2)').css('opacity','0');
    $('.hbg_btn span:nth-child(3)').css('transform','rotate(-45deg)');
    $('.mb_menu').show();
    btn_menu = 1;
  }else{
    $('.hbg_btn span:nth-child(1)').css('transform','');
    $('.hbg_btn span:nth-child(2)').css('opacity','1');
    $('.hbg_btn span:nth-child(3)').css('transform','');
    $('.mb_menu').hide();
    btn_menu = 0;
  }
});


});
