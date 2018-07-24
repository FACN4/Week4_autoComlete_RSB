var input =document.getElementById("inputBox");
input.focus();
input.addEventListener("keyup",function(){

    var xhr = new XMLHttpRequest();
    var url = "./src/data.json";

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        
      }
    }
})
