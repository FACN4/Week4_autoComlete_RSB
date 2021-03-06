var imageOf = document.getElementById("imgOfDog");
if (imageOf.src) {
  imageOf.setAttribute("style", "display:none");
}

var input = document.getElementById("inputBox");
var selectedBreed = input.value;
var searchButton = document.getElementById("btn");
var pic = document.getElementById("imgOfDog");

input.focus();

searchButton.addEventListener("click", function() {
  selectedBreed = input.value;


  selectedBreed = selectedBreed.trim().toLowerCase();

  if (selectedBreed.indexOf("-") !== -1) {
    var split = selectedBreed.split("-");

    selectedBreed = split[1] + "-" + split[0];
  }
  var xhr = new XMLHttpRequest();
  var apiUrl = "https://dog.ceo/api/breed/" + selectedBreed + "/images/random";
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = JSON.parse(xhr.response);

      pic.src = res.message;
      imageOf.setAttribute("style", "display:inline");
    }
  };
  xhr.open("GET", apiUrl);
  if (input) {
    xhr.send();
  }
});

//listener for key strokes
input.addEventListener("keyup", function() {
  var jsonData;
  var xhr = new XMLHttpRequest();
  var url = "./src/data.json";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      jsonData = JSON.parse(xhr.responseText);
      var keys = Object.keys(jsonData);
      let str = input.value;
      console.log(str);
      let sugg = document.getElementById("suggestion");
      // clear data after each keystroke
      if (sugg.hasChildNodes()) {
        while (sugg.firstChild) {
          sugg.removeChild(sugg.firstChild);
        }
      }
      //search for matching keys in the json
      keys.forEach(function(k) {
        if (str !== "" && k.indexOf(str) !== -1) {
          // if string is not empty and the str is in the key
          var len = str.length;

          var arr = jsonData[k];
          if (arr.length == 0) {
            //if key has no values (check data.json)
            let opt = document.createElement("option");
            opt.value = k;
            sugg.appendChild(opt);
          } else {
            arr.forEach(function(val) {
              // run on all values and add value then key as an option
              let opt = document.createElement("option");
              opt.value = val + "-" + k;
              sugg.appendChild(opt);
            });
          }
        }
      });
    }
  };
  xhr.open("GET", url);
  xhr.send();
});
