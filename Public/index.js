var input = document.getElementById("inputBox");
input.focus();
input.addEventListener("keyup", function() {
  var jsonData;
  var xhr = new XMLHttpRequest();
  var url = "./src/data.json";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      jsonData = JSON.parse(xhr.responseText);
      var keys = Object.keys(jsonData);
      let str = input.value;
      let sugg = document.getElementById("suggestion");

      if (sugg.hasChildNodes()) {
        while (sugg.firstChild) {
          sugg.removeChild(sugg.firstChild);
        }
      }
      keys.forEach(function(k) {
        if (str !== "" && k.indexOf(str) !== -1) {
          let opt = document.createElement("option");
          opt.value = k;
          console.log(opt);
          sugg.appendChild(opt);
        }
      });
    }
  };
  xhr.open("GET", url);
  xhr.send();
});
