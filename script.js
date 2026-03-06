function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "082fd16aae1d4dd4bc8af3a62eb881e5";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then(response => response.json())
.then(data => {

let temp = data.main.temp;

document.getElementById("result").innerHTML =
"Temperature in " + city + " is " + temp + "°C";

});
}
