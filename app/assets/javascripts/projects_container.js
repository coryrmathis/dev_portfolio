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

  $(document).on("click", "#projects-container #project-header .fa-external-link", function(){
    var url = $(this).attr("href")
    window.open(url, "_blank")
  })

  $(document).on("click", "#project-header .fa-info-circle", function(){
    var descriptionModal = $("#projectDescriptionModal")
    var descriptionModalBody = $("#projectDescriptionModal .modal-body")
    var descriptionModalTitle = $("#projectDescriptionModal .modal-title")
    var url = $(this).attr("href")
    $.ajax({
      method: "GET",
      url: url
    }).done(function(response){
      var description = response.description
      descriptionModalBody.html(response.description)
      descriptionModalTitle.html(response.name)
      descriptionModal.modal()

    })
  })
})


