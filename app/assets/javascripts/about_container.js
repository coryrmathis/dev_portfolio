$(document).ready(function(){
  var backBtn = $("#about-container .back-btn")

  backBtn.on("click", function(){
    $(backBtn).closest("#about-container").hide("fold")
  })

  $(document).on("click", "#about-container content strong", function(){
    var url = $(this).attr("href");
    window.open(url, "_blank")
  })

})
