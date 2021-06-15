//const API = process.env.wAPI;
const API = 'https://api.openweathermap.org/data/2.5/weather?id=3672068&appid=41d72a4284112f6f4fcf1d29be002a7e';

const getWeather = async() => {
    try{
        const response = await fetch(API);
        const data = await response.json();
        return data;
    }catch(err) {
        console.log('Fetch error: ',err);
    }
}

export default getWeather;