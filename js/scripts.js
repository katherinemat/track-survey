$(document).ready(function() {
  $("form#learningPreferences").submit(function(event) {
    event.preventDefault();
    // How do I combine all the following hide methods into one line of code? $(".results").hide(); does not work
    $("#surveyComplete").hide();
    $("#introToProgramming").hide();
    $("#cssDesign").hide();
    $("#rubyRails").hide();
    $("#phpDrupal").hide();
    $("#javaAndroid").hide();
    $("#cNet").hide();
    $("#mystery").hide();

    var userName = $("input#name").val();
    // var frontEndBackEndText = $("#frontEndBackEnd option:selected").text();
    // alert(frontEndBackEndText);
    var introCompleteVal = parseInt($("input:radio[name=introComplete]:checked").val());
    var frontEndBackEndVal = parseInt($("#frontEndBackEnd option:selected").val());
    // var typeCompanyText = $("#typeCompany option:selected").text();
    // alert(typeCompanyText);
    var typeCompanyVal = parseInt($("#typeCompany option:selected").val());
    var contentTypeVal = parseInt($("input:radio[name=contentType]:checked").val());
    var applicationTypeVal = parseInt($("input:radio[name=applicationType]:checked").val());

    $(".userName").append(userName);
    $("#surveyComplete").show();

    if (introCompleteVal < 1) {
      $("#introToProgramming").show();
    } else if (frontEndBackEndVal < 1) {
      $("#cssDesign").show();
    } else if (typeCompanyVal < 1) {
      $("#rubyRails").show();
    } else if (contentTypeVal < 1) {
      $("#phpDrupal").show();
    } else if (applicationTypeVal < 1) {
      $("#javaAndroid").show();
    } else if (applicationTypeVal === 1) {
      $("#cNet").show();
    } else {
      $("#mystery").show();
    }

    

  });
});
