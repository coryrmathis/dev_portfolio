$(document).ready(function(){

  $(".fa-info").on("click", function(e){
    var aboutContainer = $("#about-container")
    e.preventDefault()
    aboutContainer.show("fold")

  })

  $(".fa-code").on("click", function(e){
    var aboutContainer = $("#projects-container")
    var projectsList = $("#projects-list")
    projectsList.slick({
      init: aboutContainer.show("fold" ),
      dots: true,
      infinite: false
    }) 
  })

  $(document).on("mouseenter", "#portrait-curtain", function(){
    $("#landing-page-portrait").hide("fade")
    $("#portrait-curtain .links").show("fade")
  })
  $(document).on("mouseleave", "#portrait-curtain", function(){
    $("#landing-page-portrait").show("fade")
    $("#portrait-curtain .links").hide("fade")
  })
})


