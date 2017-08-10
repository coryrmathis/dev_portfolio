$(document).ready(function(){
  var backBtn = $("#about-container .back-btn")

  backBtn.on("click", function(){
    $(backBtn).closest("#about-container").hide("fold")
  })

})
