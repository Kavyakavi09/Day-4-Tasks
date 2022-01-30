//3)Use the same rest countries and print all countries name, region, sub region and population
var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
    //console.log(data);
   for(var i=0;i<data.length;i++){
        console.log(`Country:${data[i].name}
region:${data[i].region}
subregion:${data[i].subregion}
population:${data[i].population}`);
    }
}
else{
    console.log("Data is not available");
}
};

