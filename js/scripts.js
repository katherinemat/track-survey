

$(document).ready(function() {
  $("form#learningPreferences").submit(function(event) {
    event.preventDefault();

    var userName = $("input#name").val();
    var frontEndBackEnd = $("#frontEndBackEnd option:selected").text();
    alert(frontEndBackEnd);


    $(".userName").append(userName);
    $("#surveyComplete").show();

    if (frontEndBackEnd === "Front-end design") {
      $("#cssDesign").show();
    } 

  });
});
