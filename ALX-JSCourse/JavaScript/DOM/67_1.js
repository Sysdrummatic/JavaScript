document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("input[type='button']").onclick = function () {
    // alert("test");

    let blad = "Błąd!";

    // IMIE

    let imie = document.querySelector("input[name=imie]").value;
    document.querySelector("#imie").innerHTML = imie;

    if (imie === "") {
      document.querySelector("#error_imie").innerHTML = blad;
    }

    // NAZWISKO

    let nazwisko = document.querySelector("input[name=nazwisko]").value;
    document.querySelector("#nazwisko").innerHTML = nazwisko;

    if (nazwisko === "") {
      document.querySelector("#error_nazwisko").innerHTML = blad;
    }

    // MIASTO

    let miasto = document.querySelector("select[name=miasto]").value;
    document.querySelector("#miasto").innerHTML = miasto;

    if (miasto === "") {
      document.querySelector("#error_miasto").innerHTML = blad;
    }

    // TECHNOLOGIE

    let techCheck = false;
    let techTab = [];
    let technologie = document.querySelectorAll("input[type=checkbox]");
    for (let x of technologie) {
      if (x.checked == true) {
        techCheck = true;
        techTab.push(x.value);
      }
    }
    document.querySelector("#technologie").innerHTML = techTab;
    console.log(techTab);
    if (techTab.length == 0) {
      document.querySelector("#error_technologia").innerHTML = blad;
    }

    // STANOWISKO

    let stanowiskoCheck = false;
    let stanowisko = document.querySelectorAll("input[type=radio]");
    for (let x of stanowisko) {
      if (x.checked == true) {
        stanowiskoCheck = true;
        stanowisko = x.value;
        break;
      }
    }

    if (stanowiskoCheck === false) {
      document.querySelector("#error_stanowisko").innerHTML = blad;
    } else {
      document.querySelector("#stanowisko").innerHTML = stanowisko;
    }

    let uwagi = document.querySelector("textarea[name=uwagi]").value;
    document.querySelector("#uwagi").innerHTML = uwagi;
  };
});
