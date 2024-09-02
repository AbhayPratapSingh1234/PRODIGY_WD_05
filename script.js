const apiKey = "bfde3008ca8e4587738a2c2902b29089";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiforcastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const forecastImg = document.querySelector(".forcaste-img1");
const forecastImg1 = document.querySelector(".forcaste-img2");
const forecastImg2 = document.querySelector(".forcaste-img3");
const forecastImg3 = document.querySelector(".forcaste-img4");
const forecastImg4 = document.querySelector(".forcaste-img5");
const forecastImg5 = document.querySelector(".forcaste-img6");
const forecastImg6 = document.querySelector(".forcaste-img7");
const forecastImg7 = document.querySelector(".forcaste-img8");
const weather = document.querySelectorAll(".weather-like", ".weather-like1", ".weather-like2", ".weather-like3", ".weather-like4", ".weather-like5", ".weather-like6", ".weather-like7");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const response1 = await fetch(apiforcastUrl + city + `&appid=${apiKey}`);
  var data1 = await response1.json();
  var data = await response.json();
  console.log(data1);
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
  document.querySelector(".description").innerHTML = data.weather[0].description;
  document.querySelector(".feelsTemp").innerHTML = Math.round(data.main.feels_like) + "°c";
  /**forecast data  day1*/
  document.querySelector(".day1").innerHTML = data1.list[1].dt_txt;
  document.querySelector(".max-temp").innerHTML = Math.round(data1.list[1].main.feels_like) + "°c";
  document.querySelector(".min-temp").innerHTML = Math.round(data1.list[1].main.temp_max) + "°c";
  document.querySelector(".weather-like").innerHTML = data1.list[1].weather[0].description;
  //day 2
  document.querySelector(".day2").innerHTML = data1.list[2].dt_txt;
  document.querySelector(".max-temp1").innerHTML = Math.round(data1.list[2].main.feels_like) + "°c";
  document.querySelector(".min-temp1").innerHTML = Math.round(data1.list[2].main.temp_max) + "°c";
  document.querySelector(".weather-like1").innerHTML = data1.list[2].weather[0].description;
  //day3  
  document.querySelector(".day3").innerHTML = data1.list[3].dt_txt;
  document.querySelector(".max-temp2").innerHTML = Math.round(data1.list[3].main.feels_like) + "°c";
  document.querySelector(".min-temp2").innerHTML = Math.round(data1.list[3].main.temp_max) + "°c";
  document.querySelector(".weather-like2").innerHTML = data1.list[3].weather[0].description;
  //day 4
  document.querySelector(".day4").innerHTML = data1.list[4].dt_txt;
  document.querySelector(".max-temp3").innerHTML = Math.round(data1.list[4].main.feels_like) + "°c";
  document.querySelector(".min-temp3").innerHTML = Math.round(data1.list[4].main.temp_max) + "°c";
  document.querySelector(".weather-like3").innerHTML = data1.list[1].weather[0].description;
  //day 5
  document.querySelector(".day5").innerHTML = data1.list[5].dt_txt;
  document.querySelector(".max-temp4").innerHTML = Math.round(data1.list[5].main.feels_like) + "°c";
  document.querySelector(".min-temp4").innerHTML = Math.round(data1.list[5].main.temp_max) + "°c";
  document.querySelector(".weather-like4").innerHTML = data1.list[1].weather[0].description;
  //day6
  document.querySelector(".day6").innerHTML = data1.list[6].dt_txt;
  document.querySelector(".max-temp5").innerHTML = Math.round(data1.list[6].main.feels_like) + "°c";
  document.querySelector(".min-temp5").innerHTML = Math.round(data1.list[6].main.temp_max) + "°c";
  document.querySelector(".weather-like5").innerHTML = data1.list[1].weather[0].description;
  //day7
  document.querySelector(".day7").innerHTML = data1.list[7].dt_txt;
  document.querySelector(".max-temp6").innerHTML = Math.round(data1.list[7].main.feels_like) + "°c";
  document.querySelector(".min-temp6").innerHTML = Math.round(data1.list[7].main.temp_max) + "°c";
  document.querySelector(".weather-like6").innerHTML = data1.list[1].weather[0].description;
  //day 8
  document.querySelector(".day8").innerHTML = data1.list[8].dt_txt;
  document.querySelector(".max-temp7").innerHTML = Math.round(data1.list[8].main.feels_like) + "°c";
  document.querySelector(".min-temp7").innerHTML = Math.round(data1.list[8].main.temp_max) + "°c";
  document.querySelector(".weather-like7").innerHTML = data1.list[1].weather[0].description;
  //forecast weather image 

  if (data1.list[1].weather[0].main == "Clouds") {
    forecastImg.src = "cloud-mist.png";
  }

  if (data1.list[1].weather[0].main == "Rain") {
    forecastImg.src = "cloud-rain.png";
  }
  if (data1.list[1].weather[0].main == "Clear") {
    forecastImg.src = "sun1.png";
  }

  if (data1.list[1].weather[0].main == "Mist") {
    forecastImg.src = "cloud-mist.png";
  }
  if (data1.list[1].weather[0].main == "Clouds" && data1.list[1].weather[0].description == "overcast clouds") {
    forecastImg.src = "cloud.png";
  }
  if (data1.list[1].weather[0].main == "Clouds" && data1.list[1].weather[0].description == "broken clouds") {
    forecastImg.src = "clouds1.png";
  }
  if (data1.list[1].weather[0].main == "Haze" && data1.list[1].weather[0].description == "haze") {
    forecastImg.src = "cloud-mist.png";
  }


  if (data1.list[2].weather[0].main == "Clouds") {
    forecastImg1.src = "cloud-mist.png";
  }

  if (data1.list[2].weather[0].main == "Rain") {
    forecastImg1.src = "cloud-rain.png";
  }
  if (data1.list[2].weather[0].main == "Clear") {
    forecastImg1.src = "sun1.png";
  }

  if (data1.list[2].weather[0].main == "Mist") {
    forecastImg1.src = "cloud-mist.png";
  }
  if (data1.list[2].weather[0].main == "Clouds" && data1.list[2].weather[0].description == "overcast clouds") {
    forecastImg1.src = "cloud.png";
  }
  if (data1.list[2].weather[0].main == "Clouds" && data1.list[2].weather[0].description == "broken clouds") {
    forecastImg1.src = "clouds1.png";
  }
  if (data1.list[2].weather[0].main == "Haze" && data1.list[2].weather[0].description == "haze") {
    forecastImg1.src = "cloud-mist.png";
  }


  if (data1.list[3].weather[0].main == "Clouds") {
    forecastImg2.src = "cloud-mist.png";
  }

  if (data1.list[3].weather[0].main == "Rain") {
    forecastImg2.src = "cloud-rain.png";
  }
  if (data1.list[3].weather[0].main == "Clear") {
    forecastImg2.src = "sun1.png";
  }

  if (data1.list[3].weather[0].main == "Mist") {
    forecastImg2.src = "cloud-mist.png";
  }
  if (data1.list[3].weather[0].main == "Clouds" && data1.list[3].weather[0].description == "overcast clouds") {
    forecastImg2.src = "cloud.png";
  }
  if (data1.list[3].weather[0].main == "Clouds" && data1.list[3].weather[0].description == "broken clouds") {
    forecastImg2.src = "clouds1.png";
  }
  if (data1.list[3].weather[0].main == "Haze" && data1.list[3].weather[0].description == "haze") {
    forecastImg2.src = "cloud-mist.png";
  }


  if (data1.list[4].weather[0].main == "Clouds") {
    forecastImg3.src = "cloud-mist.png";
  }

  if (data1.list[4].weather[0].main == "Rain") {
    forecastImg3.src = "cloud-rain.png";
  }
  if (data1.list[4].weather[0].main == "Clear") {
    forecastImg3.src = "sun1.png";
  }

  if (data1.list[4].weather[0].main == "Mist") {
    forecastImg3.src = "cloud-mist.png";
  }
  if (data1.list[4].weather[0].main == "Clouds" && data1.list[4].weather[0].description == "overcast clouds") {
    forecastImg3.src = "cloud.png";
  }
  if (data1.list[4].weather[0].main == "Clouds" && data1.list[4].weather[0].description == "broken clouds") {
    forecastImg3.src = "clouds1.png";
  }
  if (data1.list[4].weather[0].main == "Haze" && data1.list[4].weather[0].description == "haze") {
    forecastImg3.src = "cloud-mist.png";
  }


  if (data1.list[5].weather[0].main == "Clouds") {
    forecastImg4.src = "cloud-mist.png";
  }

  if (data1.list[5].weather[0].main == "Rain") {
    forecastImg4.src = "cloud-rain.png";
  }
  if (data1.list[5].weather[0].main == "Clear") {
    forecastImg4.src = "sun1.png";
  }

  if (data1.list[5].weather[0].main == "Mist") {
    forecastImg4.src = "cloud-mist.png";
  }
  if (data1.list[5].weather[0].main == "Clouds" && data1.list[5].weather[0].description == "overcast clouds") {
    forecastImg4.src = "cloud.png";
  }
  if (data1.list[5].weather[0].main == "Clouds" && data1.list[5].weather[0].description == "broken clouds") {
    forecastImg4.src = "clouds1.png";
  }
  if (data1.list[5].weather[0].main == "Haze" && data1.list[5].weather[0].description == "haze") {
    forecastImg4.src = "cloud-mist.png";
  }

  if (data1.list[6].weather[0].main == "Clouds") {
    forecastImg5.src = "cloud-mist.png";
  }

  if (data1.list[6].weather[0].main == "Rain") {
    forecastImg5.src = "cloud-rain.png";
  }
  if (data1.list[6].weather[0].main == "Clear") {
    forecastImg5.src = "sun1.png";
  }

  if (data1.list[6].weather[0].main == "Mist") {
    forecastImg5.src = "cloud-mist.png";
  }
  if (data1.list[6].weather[0].main == "Clouds" && data1.list[6].weather[0].description == "overcast clouds") {
    forecastImg5.src = "cloud.png";
  }
  if (data1.list[6].weather[0].main == "Clouds" && data1.list[6].weather[0].description == "broken clouds") {
    forecastImg5.src = "clouds1.png";
  }
  if (data1.list[6].weather[0].main == "Haze" && data1.list[6].weather[0].description == "haze") {
    forecastImg5.src = "cloud-mist.png";
  }


  if (data1.list[7].weather[0].main == "Clouds") {
    forecastImg6.src = "cloud-mist.png";
  }

  if (data1.list[7].weather[0].main == "Rain") {
    forecastImg6.src = "cloud-rain.png";
  }
  if (data1.list[7].weather[0].main == "Clear") {
    forecastImg6.src = "sun1.png";
  }

  if (data1.list[7].weather[0].main == "Mist") {
    forecastImg6.src = "cloud-mist.png";
  }
  if (data1.list[7].weather[0].main == "Clouds" && data1.list[7].weather[0].description == "overcast clouds") {
    forecastImg6.src = "cloud.png";
  }
  if (data1.list[7].weather[0].main == "Clouds" && data1.list[7].weather[0].description == "broken clouds") {
    forecastImg6.src = "clouds1.png";
  }
  if (data1.list[7].weather[0].main == "Haze" && data1.list[7].weather[0].description == "haze") {
    forecastImg6.src = "cloud-mist.png";
  }

  if (data1.list[8].weather[0].main == "Clouds") {
    forecastImg7.src = "cloud-mist.png";
  }

  if (data1.list[8].weather[0].main == "Rain") {
    forecastImg7.src = "cloud-rain.png";
  }
  if (data1.list[8].weather[0].main == "Clear") {
    forecastImg7.src = "sun1.png";
  }

  if (data1.list[8].weather[0].main == "Mist") {
    forecastImg7.src = "cloud-mist.png";
  }
  if (data1.list[8].weather[0].main == "Clouds" && data1.list[8].weather[0].description == "overcast clouds") {
    forecastImg7.src = "cloud.png";
  }
  if (data1.list[8].weather[0].main == "Clouds" && data1.list[8].weather[0].description == "broken clouds") {
    forecastImg7.src = "clouds1.png";
  }
  if (data1.list[8].weather[0].main == "Haze" && data1.list[8].weather[0].description == "haze") {
    forecastImg7.src = "cloud-mist.png";
  }

  //real  time weather image
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "cloud-mist.png";
  }
  if (data.weather[0].main == "Rain") {
    weatherIcon.src = "cloud-rain.png";
  }
  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "sun1.png";
  }

  if (data.weather[0].main == "Mist") {
    weatherIcon.src = "cloud-mist.png";
  }
  if (data.weather[0].main == "Clouds" && data.weather[0].description == "overcast clouds") {
    weatherIcon.src = "cloud.png";
  }
  if (data.weather[0].main == "Clouds" && data.weather[0].description == "broken clouds") {
    weatherIcon.src = "clouds1.png";
  }
  if (data.weather[0].main == "Haze" && data.weather[0].description == "haze") {
    weatherIcon.src = "cloud-mist.png";
  }


}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})

