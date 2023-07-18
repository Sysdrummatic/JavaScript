document.addEventListener("DOMContentLoaded", function(){


    // document.querySelector(".test").onclick = function(){


    //     alert("HELLO1");
    // }


    // document.querySelector(".test2").onclick = function(){


    //     alert("HELLO2");
    // }


    //##########################

    // document.querySelector("button").onclick = function(){

    //    let tab = document.querySelectorAll("p");
    //    for(let x of tab){
    //     x.style.backgroundColor = "red";
    //    }
       
    // }

    //##########################

    document.querySelector("button#zapisz").onclick = function(){

        // let imie = document.querySelector("#imie").value;
        let imie = document.querySelector("input[name=imie]").value;
        document.querySelector("h3").innerHTML = imie;
        
        
        
        let kolor = document.querySelector(".kolor").value;
        let opis = document.querySelector("textarea[name=opis]").value;
        // console.log(opis);


        let jezykCheck = false;
        let jezyk = document.querySelectorAll("input[type=radio]");
        for(let x of jezyk){
            if(x.checked == true){
                jezykCheck = true;
                jezyk = x.value;
                break;
            }
        }

        if(jezykCheck == false){
            console.log("Nic nie zaznaczono !")
        }
        else{
            console.log(jezyk);
        }



        let danieCheck = false;
        let danieTab = [];
        let danie = document.querySelectorAll("input[type=checkbox]");
        for(let x of danie){
            if(x.checked == true){
                danieCheck = true;
                danieTab.push(x.value);
                
            }
        }

        if(danieCheck == false){
            console.log("Nic nie zaznaczono !")
        }
        else{
            console.log(danieTab);
        }

        
           
    }

})