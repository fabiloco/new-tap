
const getGreetings =  async () => {

    const date = new Date();
    const hour = date.getHours();
    let greeting;

    if(hour >= 6 && hour < 12) {
        greeting = '🌄 Good morning!';
    } else if(hour >= 12 && hour < 18) {
        greeting = '🌇 Good afternoon';
    } else if(hour >= 18 || hour < 2) {
        greeting = '🌌 Good night';
    } else if(hour >= 2 && hour < 6) {
        greeting = '🌠 Go to sleep!';
    }

    return greeting;
};

export default getGreetings;