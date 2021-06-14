const API = process.env.bgAPI;

const getBackground = async () => {
    
    try {
        const response = await fetch(API, {
            headers: {
                Authorization: process.env.bgKEY,
            },
        });
        const data = await response.json();
        console.log(data.photos[0].src);

        return data.photos[0].src.original;

    } catch(err) {
        console.log('Fetch error: ', err);
    };
    
};

export default getBackground;