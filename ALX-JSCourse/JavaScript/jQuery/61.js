$(document).ready(function () {
  $("p#bold span.dodaj").click(function () {
    $("p#napisTestowy").addClass("bold");
  });
  $("p#bold span.usun").click(function () {
    $("p#napisTestowy").removeClass("bold");
  });

  $("p#borderBottom span.dodaj").click(function () {
    $("p#napisTestowy").addClass("borderBottom");
  });
  $("p#borderBottom span.usun").click(function () {
    $("p#napisTestowy").removeClass("borderBottom");
  });

  $("p#fontSize30 span.dodaj").click(function () {
    $("p#napisTestowy").addClass("fontSize30");
  });
  $("p#fontSize30 span.usun").click(function () {
    $("p#napisTestowy").removeClass("fontSize30");
  });

  $("p#colorRed span.dodaj").click(function () {
    $("p#napisTestowy").addClass("colorRed");
  });
  $("p#colorRed span.usun").click(function () {
    $("p#napisTestowy").removeClass("colorRed");
  });
});
