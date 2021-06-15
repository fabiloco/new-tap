import getWeather from '../utils/getWeather';
import getDay from '../utils/getDay';

const Weather = async() => {
    const data = await getWeather();
    const KELVIN = 273.15;
    const tempC = Math.floor(data.main.temp - KELVIN);

    const day = await getDay();
    console.log('day:'+await getDay());

    const view = 
    `
        <div class="flex items-center justify-around">
            <img class="w-12 h-12" src="./src/icons/${data.weather[0].icon}.png">
            <span class="text-white text-4xl ml-3">${day}</span>
        </div>

        <div class="flex justify-evenly items-center">
            <span class="text-white text-xl">${tempC}<span class="text-xs">°c </span></span>
            <span class="text-white text-opacity-50 text-sm"> ${data.weather[0].description}</span>
        </div>
    `;

    return view;
};

export default Weather;