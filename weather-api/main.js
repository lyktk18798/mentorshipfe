import * as dotenv from 'dotenv' 
dotenv.config()

const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const img = document.querySelector('img')
const place = document.querySelector('.place')
const temp = document.querySelector('.temperature')
const weatherMain = document.querySelector('.weather-main')
const weatherDes = document.querySelector('.weather-desciption')
const cloud = document.querySelector('.cloud-description')
const wind = document.querySelector('.wind-description')


const apiKey = process.env.API_KEY;
const root  = process.env.ROOT;

//BOOTSTRAP JS trigger list when click cloud and wind icon 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


//Function fetch API then log out data to HTML
const getWeather = async (cityName) => {
    try{
        let response = await fetch(`${root}?q=${cityName}&units=metric&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                place.innerHTML = `${data["name"]}, ${data["sys"]["country"]}`
                temp.innerHTML =`${data["main"]["temp"]}°C` 
                weatherMain.innerHTML = data["weather"][0]["main"]

                let detailWeath = data["weather"][0]["description"]
                let capitalized = detailWeath.charAt(0).toUpperCase() + detailWeath.slice(1);
                weatherDes.innerHTML = capitalized

                wind.innerHTML = `Wind speed: ${data["wind"]["speed"]}m/s`
                cloud.innerHTML = `Cloudiness: ${data["clouds"]["all"]}%`

                img.src=`https://openweathermap.org/img/wn/${data["weather"][0]["icon"]}@2x.png` 
            })
    } catch(err) {
            alert('Pls, check your city name again')
    }
}

//Để 1 cái getWeather mẫu, khi load trang tự hiện ra thời tiết của HN
getWeather('hanoi');

//Get input value then resolve
btn.onclick = () => {
    if(input.value) {
        getWeather(`${input.value}`)
        input.value = '';      
    }
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        if(input.value) {
            getWeather(`${input.value}`)
            input.value = '';
        }
    }   
})

