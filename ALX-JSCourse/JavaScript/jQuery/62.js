$(document).ready(function () {
  $("p#ukryj").click(function () {
    $("div#blokTestowy").hide(2000);
  });
  $("p#pokaz").click(function () {
    $("div#blokTestowy").show(2000);
  });

  $("p#sDown").click(function () {
    $("div#blokTestowy").slideDown(2000);
  });
  $("p#sUp").click(function () {
    $("div#blokTestowy").slideUp(2000);
  });

  $("p#fIn").click(function () {
    $("div#blokTestowy").fadeIn(2000);
  });
  $("p#fOut").click(function () {
    $("div#blokTestowy").fadeOut(2000);
  });
});

//fadeIn

//fadeOut

//   slideDown
//   slideUp
