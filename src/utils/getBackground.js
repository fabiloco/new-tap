//const API = process.env.bgAPI;
const API = 'https://unsplash.it/1920/1080/?random';

const getBackground = async () => {
    
    try {
        // const response = await fetch(API, {
        //     headers: {
        //         Authorization: process.env.bgKEY,
        //     },
        // });
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        // console.log(data.photos[0].src);

        // return data.photos[0].src.original;

    } catch(err) {
        console.log('Fetch error: ', err);
    };
    
};

export default getBackground;