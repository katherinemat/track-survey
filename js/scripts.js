

$(document).ready(function() {
  $("form#learningPreferences").submit(function(event) {
    event.preventDefault();

    var userName = $("input#name").val();

    var frontEndBackEndText = $("#frontEndBackEnd option:selected").text();
    alert(frontEndBackEndText);

    var frontEndBackEndVal = parseInt($("#frontEndBackEnd option:selected").val());
    alert(frontEndBackEndVal);

    var typeCompanyText = $("#typeCompany option:selected").text();
    alert(typeCompanyText);

    var typeCompanyVal = parseInt($("#typeCompany option:selected").val());
    alert(typeCompanyVal);

    $(".userName").append(userName);
    $("#surveyComplete").show();

    if (frontEndBackEndVal < 1) {
      $("#cssDesign").show();
    } else if (typeCompanyVal < 1) {
      $("#rubyRails").show();
    }

  });
});
