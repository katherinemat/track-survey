

$(document).ready(function() {
  $("form#learningPreferences").submit(function(event) {
    event.preventDefault();
    //
    var userName = $("input#name").val();
    // // var frontEndBackEnd = parseInt($("#frontEndBackEnd").val());
    //
    $(".userName").append(userName);
    $("#surveyComplete").show();


  });
});