// function test() {
//   alert("CZEŚĆ!");
// }

document.addEventListener("DOMContentLoaded", function () {
  //Selektor odnoszący się do jednego elementu

  //   <!-- ##################### -->

  //   document.querySelector(".test1").onclick = function () {
  //     alert("CZEŚĆ 1");
  //   };

  //   document.querySelector(".test2").onclick = function () {
  //     alert("CZEŚĆ 2");
  //   };

  //   <!-- ##################### -->

  //   document.querySelector("button").onclick = function () {
  //     let tab = document.querySelectorAll("p");
  //     // console.log(x);

  //     for (let x of tab) {
  //       x.style.backgroundColor = "red";
  //     }
  //   };

  document.querySelector("button#zapisz").onclick = function () {
    let imie = document.querySelector("#imie").value;
    console.log(imie);
  };
});
