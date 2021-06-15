import background from '../utils/getBackground';
import Clock from '../components/Clock';
import Search from '../components/Search';
import Weather from '../components/Weather';

const Home = async () => {
    const bgImage = await background();

    return `
        <div  class="w-screen h-screen bg-gruvbox-bg flex flex-col flex-auto items-center justify-center">
            <h1 class="text-lg text-white mb-2">Good morning!</h1>

            <div class="flex items-center justify-center mb-4">
                <div id="clock" class=" bg-white bg-opacity-20 text-white text-opacity-50 rounded-md p-3">
                    <div class="">
                        ${await Clock()}
                    </div>
                </div>
                <div class="bg-white bg-opacity-20 rounded-md p-2 ml-2">
                    ${await Weather()}
                </div>
            </div>
            ${await Search()}

        </div>
    `;
};

export default Home;