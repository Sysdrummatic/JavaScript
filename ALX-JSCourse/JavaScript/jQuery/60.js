$(document).ready(function () {
  $("input").keyup(function () {
    let pobierz = $("input").val();
    $("h1#klon").html(pobierz);
  });
});
