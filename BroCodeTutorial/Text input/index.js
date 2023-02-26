// console.log("Text");

// let username = window.prompt("What is you name?");

// console.log(username);

let username2;

document.getElementById("myButton").onclick = function () {
  username2 = document.getElementById("myText").value;
  console.log(username2);
  document.getElementById("myLable").innerHTML = "Hello " + username2 + "!";
};
