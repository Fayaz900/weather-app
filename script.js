let city = document.getElementById("city")
let type = document.getElementById("type")
let temp = document.getElementById("temp")
let image = document.getElementById("img")
let input = document.getElementById("inp");
let API_KEY="6ee32c610bae4417a57154828231307";

const data = async function(search){
    let getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search}`)
    let jsonData = await getData.json();
    console.log(jsonData);
    console.log(jsonData.location.name);

    city.innerHTML = jsonData.location.name;
    type.innerHTML = jsonData.current.condition.text;
    temp.innerHTML = Math.floor(jsonData.current.feelslike_c)+"°C";

    // if(type)
}

function myFun(){
    search = input.value
    data(search);
}
