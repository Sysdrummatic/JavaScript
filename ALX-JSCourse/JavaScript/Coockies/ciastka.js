document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#utwórz").onclick = function () {
    utworz("ZLX", "JS", 5);
    utworz("ZdX", "4S", 6);
  };
  document.querySelector("#odczytaj").onclick = function () {
    odczytaj("ZLX");
  };
});

utworz = (nazwa, wartosc, dni) => {
  let d = new Date();
  d.setTime(d.getTime() + dni * 24 * 60 * 60 * 1000);
  document.cookie = `${nazwa}=${wartosc};expires=${d.toUTCString()}`;
};

odczytaj = (nazwa) => {
  let ciastka = document.cookie;
  let ciastkaTab = ciastka.split("; ");
  console.log(ciastkaTab);
  for (x of ciastkaTab) {
    let = xTab = x.split("=");
    if (xTab[0] == nazwa) {
      console.log(xTab[1]);
      break;
    }
    console.log(xTab);
  }
};

/*

document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector("#utworz").onclick = function(){

        utworz("ALX3", "MySQL", 5);

    }

    document.querySelector("#odczytaj").onclick = function(){

        odczytaj("ALX3");

    }


});

utworz = (nazwa, wartosc, dni) =>{

    let d = new Date();
    d.setTime(d.getTime() + (dni * 24 * 60 * 60 * 1000));

    document.cookie = `${nazwa}=${wartosc};expires=${d.toUTCString()}`
    //NAZWA=WARTOSC;EXPIRES=...

}

odczytaj = (nazwa) =>{

    let ciastka = document.cookie;
    let ciastkaTab = ciastka.split("; ");

    for(let x of ciastkaTab){
        xTab = x.split("=");

        if(xTab[0] == nazwa){
            console.log(xTab[1]);
            break;
        }
    }


}

*/
