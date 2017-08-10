$(document).ready(function(){

  var backBtn = $("#projects-container .back-btn")

  backBtn.on("click", function(){
    $(backBtn).closest("#projects-container").hide("fold")
  })
})


