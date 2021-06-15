import Home from '../pages/Home';
import Clock from '../components/Clock';

const router = async () => {
    const content = null || document.getElementById('content');

    content.innerHTML = await Home();

    const clock = null || document.getElementById('clock');


    setInterval(async ()=> {
         clock.innerHTML = await Clock();
    },1000);
};

export default router;