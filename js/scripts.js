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
    var frontEndBackEndText = $("#frontEndBackEnd option:selected").text();
    var introCompleteVal = parseInt($("input:radio[name=introComplete]:checked").val());
    var frontEndBackEndVal = parseInt($("#frontEndBackEnd option:selected").val());
    var typeCompanyText = $("#typeCompany option:selected").text();
    var typeCompanyVal = parseInt($("#typeCompany option:selected").val());
    var contentTypeVal = parseInt($("input:radio[name=contentType]:checked").val());
    var applicationTypeVal = parseInt($("input:radio[name=applicationType]:checked").val());

    $(".userName").append(userName);
    $("#surveyComplete").show();

    if (!userName) {
      $(".question1").addClass("error");
    } else if (!introCompleteVal) {
      $(".question2").addClass("error");
    } else if (frontEndBackEndText === "Choose one") {
      $(".question3").addClass("error");
    } else if (typeCompanyText === "Choose one") {
      $(".question4").addClass("error");
    } else if (!contentTypeVal) {
      $(".question5").addClass("error");
    } else if (!applicationTypeVal) {
      $(".question6").addClass("error");
    } else {
      $(".question1").removeClass("error");
      $(".question2").removeClass("error");
      $(".question3").removeClass("error");
      $(".question4").removeClass("error");
      $(".question5").removeClass("error");
      $(".question6").removeClass("error");

      if (introCompleteVal < 2) {
        $("#introToProgramming").show();
      } else if (frontEndBackEndVal < 2) {
        $("#cssDesign").show();
      } else if (typeCompanyVal < 2) {
        $("#rubyRails").show();
      } else if (contentTypeVal < 2) {
        $("#phpDrupal").show();
      } else if (applicationTypeVal < 2) {
        $("#javaAndroid").show();
      } else if (applicationTypeVal === 2) {
        $("#cNet").show();
      } else {
        $("#mystery").show();
      }
    }


  });
});
