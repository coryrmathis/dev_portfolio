$(document).ready(function(){
  $("#projects-toggle, #about-toggle").on("mouseenter", function(){
    $(this).animate({height: "180px"}, 300)


  });

  $("#projects-toggle, #about-toggle").on("mouseleave", function(){
    $(this).animate({height: "100px"}, 300)
  });

});

