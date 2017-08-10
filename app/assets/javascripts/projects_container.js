$(document).ready(function(){
  var projectsList = $("#projects-list")
  var backBtn = $("#projects-container .back-btn")

  $(document).on("click", "#projects-container .back-btn", function(){
    
    $(this).closest("#projects-container").hide("fold", {
      complete: function(){
        projectsList.slick("unslick")
      }
    })
    
  })
})


