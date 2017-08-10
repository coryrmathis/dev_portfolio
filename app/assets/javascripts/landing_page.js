$(document).ready(function(){
  $(".fa-info").on("click", function(e){
    var aboutContainer = $("#about-container")
    e.preventDefault()
    aboutContainer.show("fold")
    $("#projects-list").slide()

  })

  $(".fa-code").on("click", function(e){
    var aboutContainer = $("#projects-container")
    var projectsList = $("#projects-list")
    aboutContainer.show("fold", {
      complete: function(){
        $("#projects-list").slick()
      }
    })

  })
})


