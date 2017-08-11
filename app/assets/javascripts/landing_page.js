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
})


