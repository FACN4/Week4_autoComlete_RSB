var ajax = require('/ajaxData');
function Autocomplet(input,config){
var datalistID=input.getAttribute("list");
var datalist = document.getElementById(datalistID);
  //consol.log(input.value);
  var query = {
    query: input.value
  };
  var ajaxConfig = {
    method : "POST",
    contentType : "application/JSON",
    url : config.url,
    query:JSON.stringify(query)
  };
  ajax.request(ajaxConfig,function(error,data){
    if(error){
      throw new error("Networkerror:"+error);
    }
    data = JSON.parse(data);
    data.match.forEach(function(dog){
      var option=document.createElement("option");
      option.setAttribute("value",dog.name);
      consol.lod(dog.name);
    });
  });
});
module.exports=Autocomplete;
