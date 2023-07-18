$(document).ready(function () {
  let i = 0;
  $("img").mouseover(function () {
    i++;
    $("span#licznik").html(i);
  });
});
