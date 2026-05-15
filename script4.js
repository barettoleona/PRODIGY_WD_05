const apiKey = "05ac7d1c590ddb3ae95142d462396593";

async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if(city === ""){
        alert("Please enter city name");
        return;
    }

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if(data.cod != 200){
            alert(data.message);
            return;
        }

        document.getElementById("cityName").innerText = data.name;

        document.getElementById("temperature").innerText =
        Math.round(data.main.temp) + "°C";

        document.getElementById("description").innerText =
        data.weather[0].description;

        document.getElementById("humidity").innerText =
        data.main.humidity + "%";

        document.getElementById("wind").innerText =
        data.wind.speed + " km/h";

        document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    }

    catch(error){
        console.log(error);
        alert("Something went wrong");
    }
}