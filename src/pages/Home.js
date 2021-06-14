import background from '../utils/getBackground';
import Clock from '../components/Clock';
import Search from '../components/Search';

const Home = async () => {
    const bgImage = await background();
    return `
        <div  class="w-screen h-screen bg-gruvbox-bg flex flex-col flex-auto items-center justify-center">
            <h1 class="text-lg text-white mb-2">Good morning!</h1>
            <div id="clock" class="mb-4 bg-white bg-opacity-20 text-white text-opacity-50 rounded-md p-2">
                ${await Clock()}
            </div>
            ${await Search()}

        </div>
    `;
};

export default Home;