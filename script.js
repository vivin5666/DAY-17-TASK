var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var api = "https://restcountries.com/v2/all";
var fet = fetch(api)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        lat: value.latlng[0],       
      };
      createcountry(spreadOperator);
    
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region,latlng}) {
   
  row.innerHTML += 
  `<div class="col-lg-4" "col-sm-12">
  <div class="card border-primary mb-3" style="max-width: 18rem;">  
    <div class="card-body text-primary" >
    <h1 class="card-title" >${name}</h1>
    <img src="${flag}" class="card-img-top" alt="Country Flags"> 
  <div class="card-body text-primary" >  
  <p class="card-text">Captial :${capital}</p>
  <p class="card-text">Region : ${region}</p>
  <p class="card-text">Country Code :${code}</p>
  <p class="card-text"> Latlng:${latlng}</p>   
  <a href="#" class="btn btn-primary" onclick=(block(${latlng})) >Click for Weather</a>
</div>
  </div>
</div>
</div>
`
}

function block(latlng){

  var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latlng}&lon=${latlng}&appid=89e011350ec9bf59d8ecbe901966edce`
   
 
  fetch(WAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
document.body.append(container);  
document.addEventListener("click",(event) => event.preventDefault())