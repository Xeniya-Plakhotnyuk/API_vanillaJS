const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "e1d9ece8fd2d54ad68ac169a83080e9e",
  };
  
  const input = document.querySelector("#input");
  input.addEventListener("keypress", enter);
  
  function enter(e) {
    if (e.keyCode === 13) {
      getInfo(input.value);
    }
  }
  
  async function getInfo(data) {
    const res = await fetch(
      `${api.endpoint}weather?q=${data}&units=imperial&appID=${api.key}`
    );
    const resReseived = await res.json();
    displayResult(resReseived);
  }
  
  function displayResult(resReseived) {
    let city = document.querySelector("#city");
    city.textContent = `${resReseived.name}, ${resReseived.sys.country}`;
  
    getOurDate();
  
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(resReseived.main.temp)} <span>°</span>`;
  
    let real = document.querySelector("#feelsLike");
    real.innerHTML =
      "Feels like:" + `${Math.round(resReseived.main.feels_like)} <span>°</span>`;
  
    let cond = document.querySelector("#conditions");
    cond.textContent = `${resReseived.weather[0].description}`;
  
    let variation = document.querySelector("#variation");
    variation.innerHTML =
      "Min:" +
      " " +
      `${Math.round(resReseived.main.temp_min)} <span>°</span>` +
      " " +
      "Max:" +
      " " +
      `${Math.round(resReseived.main.temp_max)} <span>°</span>`;
  }
  
  function getOurDate() {
    const myDate = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = days[myDate.getDay()];
  
    let todayDate = myDate.getDate();
    
  
    let month = months[myDate.getMonth()];
    
  
    let year = myDate.getFullYear();
    
    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` +" " +`${todayDate}`+" " +`${month}`+" " + `${year}`;
  
  }
  