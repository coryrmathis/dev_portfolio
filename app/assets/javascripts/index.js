$(document).ready(function(){
  $("#projects-toggle, #about-toggle").on("mouseenter", function(){
    var element = $(this)
    element.animate({height: "180px"}, 300)
    if(element.attr("id") === "about-toggle"){
      $("#about-heading").animate({"margin-top": "70px"}, 300)
    }else if(element.attr("id") === "projects-toggle"){
      $("#projects-heading").animate({"margin-top": "80px"}, 300)
    }
  });

  $("#projects-toggle, #about-toggle").on("mouseleave", function(){
    var element = $(this)
    $(this).animate({height: "100px"}, 300)
    if(element.attr("id") === "about-toggle"){
      $("#about-heading").animate({"margin-top": "30px"}, 300)
    }else if(element.attr("id") === "projects-toggle"){
      $("#projects-heading").animate({"margin-top": "40px"}, 300)
    }
  });

});
