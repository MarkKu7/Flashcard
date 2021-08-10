$(document).ready(function() {
    $("#operator").click(function() {
        $(".flashcard-showing#operators").toggle();
        $(".flashcard-hidden#operatorh").toggle();
    });
    $("#javascript").click(function() {
      $(".flashcard-showing#javascripts").toggle();
      $(".flashcard-hidden#javascripth").toggle();
     });
    $("#variable").click(function() {
      $(".flashcard-showing#variables").toggle();
      $(".flashcard-hidden#variableh").toggle();
    });
});
