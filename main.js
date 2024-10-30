const KEY = 'd66c408f4d80b9c61410ef4622f174f9'

let tema1 = document.getElementById('tema1')
let tema2 = document.getElementById('tema2')
let info = document.getElementById('info')
let alibek = document.getElementById('alibek')


const getData = async (city)=>{

const base = 'https://api.openweathermap.org/data/2.5/weather?q='
const cityName = city
const qury = '&units=metric&appid='



const data = await fetch(base + cityName + qury + KEY)

const jsonData = await data.json()


tema1.textContent =`${jsonData.name}`

tema2.textContent =`${Math.floor(jsonData.main.temp)}°C`


info.innerHTML = ``

}