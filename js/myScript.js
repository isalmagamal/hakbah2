
$(document).ready(function(){
    
//hamburger-menu
 $( "#close-hamburger-menu" ).hide();
$( "#menulist-hamburger" ).hide();
$( "#hamburger-menu" ).click(function() {
$( "#menulist-hamburger" ).slideToggle( "slow", function() {
$( "#hamburger-menu" ).hide();
$( "#close-hamburger-menu" ).show();
});
});

$( "#close-hamburger-menu" ).click(function() {
$( "#menulist-hamburger" ).slideToggle( "slow", function() {
$( "#close-hamburger-menu" ).hide();
$( "#hamburger-menu" ).show();
});
}); 
////////////////////////////////////////////////////////////////
//header-shadow
    $(document).scroll(function() { 
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 300) {
                $("header").css('box-shadow', '0px 20px 18px -25px #0000001a');
                } else {
                }
            });
////////////////////////////////////////////////////////////////
//hover-over-menu-and-change-icons

  $('#sublist-1').hide();  
  $("#list1").mouseenter( function () {
    $(this).find("#sublist-1").stop().slideDown(300, "linear");
      $("#sublist-1").mousemove;
      $(this).find($(".fas")).removeClass('fa-angle-down').addClass('fa-angle-up');
  });  
  $("#list1").mouseleave( function () {
      $(this).find("#sublist-1").stop().slideUp(400);
      $(this).find($(".fas")).removeClass('fa-angle-up').addClass('fa-angle-down');

  });
  $('#sublist-2').hide();  
  $("#list2").mouseenter( function () {
    $(this).find("#sublist-2").stop().slideDown(300, "linear");
      $("#sublist-2").mousemove;
      $(this).find($(".fas")).removeClass('fa-angle-down').addClass('fa-angle-up');
  });  
  $("#list2").mouseleave( function () {
      $(this).find("#sublist-2").stop().slideUp(400);
      $(this).find($(".fas")).removeClass('fa-angle-up').addClass('fa-angle-down');
  });
$('#sublist-3').hide();  
  $("#list3").mouseenter( function () {
    $(this).find("#sublist-3").stop().slideDown(300, "linear");
      $("#sublist-3").mousemove;
      $(this).find($(".fas")).removeClass('fa-angle-down').addClass('fa-angle-up');
  });  
  $("#list3").mouseleave( function () {
      $(this).find("#sublist-3").stop().slideUp(400);
      $(this).find($(".fas")).removeClass('fa-angle-up').addClass('fa-angle-down');
  });
//////////////////////////////////////////////////////////////////////////////////////

//go-to-top-button
    $(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#myBtn').fadeIn();
    } else {
        $('#myBtn').fadeOut();
    }
});

$("#myBtn").click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
 });

    
//////////////////////////////////////////////////////////////////////////////////////
//        $(window).scroll(function() {
//    if ($(this).scrollTop()) {
//        $('#ellipse').fadeIn();
//    } else {
//        $('#ellipse').fadeOut();
//    }
//});
    
    
    
/////////////////////////////////////////////////////////////////////////////////////
//section-6-toggle-divs
    $(".questions-div-right").click(function(){
     $(".questions-div-right .questions-p").hide();   
    $(this).find(".questions-p").toggle();
    $(this).find($(".fas")).toggleClass('fa-angle-down fa-angle-up');
    $(this).click(function(){
        $(this).find(".questions-p").toggle();
    })
  });
    
        $(".questions-div-left").click(function(){
     $(".questions-div-left .questions-p").hide();   
    $(this).find(".questions-p").toggle();
    $(this).find($(".fas")).toggleClass('fa-angle-down fa-angle-up');
    $(this).click(function(){
        $(this).find(".questions-p").toggle();
    })
  });
    
    
//    $(".questions-div").click(function(){
//     $(".questions-div .questions-p").hide();   
//    $(this).find(".questions-p").stop().slideDown();
//    $(this).find($(".fas")).removeClass('fa-angle-down').addClass('fa-angle-up');
//  });
//    $(".questions-div").click(function(){
//    $(this).find(".questions-p").stop().slideUp(1000);
//      });  

//////////////////////////////////////////////////////////////////////////////////////

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});