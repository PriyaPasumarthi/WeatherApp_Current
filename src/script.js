/*let apiurl="https://jsonplaceholder.typicode.com/comments";
let x=document.querySelector('h1');
axios.get(apiurl).then((response)=>{
    console.log(response.data[0].email);
})*/
function set_time(timestamp) {
    let da = new Date(timestamp);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday', 'Saturday']
    let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    let week = document.getElementsByClassName('day');
    day.innerHTML = days[da.getDay()];
    date.innerHTML = da.getDate();
    month.innerHTML = months[da.getMonth()];
    hours.innerHTML = da.getHours();
    if (da.getMinutes() < 10) {
        minutes.innerHTML = `0${da.getMinutes()}`;
    }
    else
        minutes.innerHTML = da.getSeconds();
    if (da.getSeconds() < 10) {
        seconds.innerHTML = `0${da.getSeconds()}`;
    }
    else
        seconds.innerHTML = da.getSeconds();
}
let temp = document.getElementById("temperature");
let apiKey = "5b30d4740114481b404001bb77d4c46b";
function display(response) {
    console.log(response);
    des.innerHTML = response.data.weather[0].description;
    temp.innerHTML = Math.round(response.data.main.temp);
    speed.innerHTML = response.data.wind.speed;
    humidity.innerHTML = response.data.main.humidity;
    pressure.innerHTML = response.data.main.pressure;
    celsius = response.data.main.temp;
    set_time(response.data.dt * 1000);
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)
}
function forecast(event) {
    event.preventDefault();
    let cityname = document.getElementById("user").value;
    if (cityname.length == 0) {
        document.getElementById('place').innerHTML = "Please enter the city name..!!";
        temp.innerHTML = " ";
        speed.innerHTML = " ";
        humidity.innerHTML = " ";
        pressure.innerHTML = " ";
        des.innerHTML = " ";
        day.innerHTML = " ";
        date.innerHTML = " ";
        month.innerHTML = " ";
        hours.innerHTML = " ";
        minutes.innerHTML = " ";
        seconds.innerHTML = " ";
    }
    else {
        document.getElementById('place').innerHTML = cityname;
    }
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`;
    axios.get(apiurl).then(display);
}

function successCallback(position) {
    console.log(position);
}
function preview(response) {
    console.log(response)
    des.innerHTML = response.data.weather[0].description;
    temp.innerHTML = Math.round(response.data.main.temp);
    speed.innerHTML = response.data.wind.speed;
    humidity.innerHTML = response.data.main.humidity;
    pressure.innerHTML = response.data.main.pressure;
    document.getElementById('place').innerHTML = response.data.name;
    set_time(response.data.dt * 1000);
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    celsius = response.data.main.temp;
}
function show(response) {
    let lat = response.coords.latitude;
    let lon = response.coords.longitude;
    //console.log(response);
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(api).then(preview);
}
function present(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(show);
    //navigator.geolocation.watchPosition(successCallback);
}

function celtofah(event) {
    event.preventDefault();
    let fahtemp = ((celsius * 9) / 5) + 32;
    temp.innerHTML = Math.round(fahtemp);
    cels.classList.remove("active");
    fahr.classList.add("active");
}

function fahtocel(event) {
    event.preventDefault();
    temp.innerHTML = Math.round(celsius);
    cels.classList.add("active");
    fahr.classList.remove("active");
}
let celsius = null;
let sea = document.getElementById('search');
let curr = document.getElementById('current');
sea.addEventListener('click', forecast);
curr.addEventListener('click', present);

let fahr = document.getElementById("fah");
let cels = document.getElementById("cel");
fahr.addEventListener("click", celtofah);
cels.addEventListener("click", fahtocel);


