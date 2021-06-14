import background from '../utils/getBackground';
import Clock from '../components/Clock';

const Home = async () => {
    const bgImage = await background();
    console.log(bgImage);
    return `
        <div style="background-image:url('${bgImage}');"  class="w-screen h-screen bg-cover">
            <h1 class="text-lg text-white">Good morning, Fabián</h1>
            <div id="clock" class="bg-white bg-opacity-20 text-white text-opacity-50 rounded-md p-2">
                ${await Clock()}
            </div>   
        </div>
    `;
};

export default Home;