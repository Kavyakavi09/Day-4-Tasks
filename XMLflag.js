//2) Display all the country flags in console


var request = new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  
request.send();

request.onload =function(){
    if(request.status>=200 && request.status<300){
    var data = JSON.parse(request.response);
   // console.log(data);
   for(var i=0;i<data.length;i++){
        console.log(`Country:${data[i].name}
Flag:${data[i].flag}`);
    }
}
else{
    console.log("Data is not available");
}
};
