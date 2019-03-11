console.dir(document);

var myArray = [2, 4, 6, 8];

function oddMaker() {
  let test = myArray.map(function(num) {
    return num + 1;
  });

  console.log(test);
}

console.log(document.getElementById("logo").style.color);

document.getElementById("logo").style.color = "white";

function changeStyles() {
  var myElem = document.getElementsByClassName("title")[0];
  if (myElem.style.backgroundColor === "red") {
    myElem.style.backgroundColor = "green";
  } else {
    myElem.style.backgroundColor = "red";
  }
}

function setTypedName() {
  var nameInput = document.getElementById("name-input").value;

  document.getElementById("typed-value").innerHTML = nameInput;
}
