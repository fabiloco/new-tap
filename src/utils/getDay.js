const getDay = async () => {
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    let time = new Date();
    let month = time.getMonth();
    let day = time.getDate();

    let currentDay = monthNames[month] + ' ' + day;

    return currentDay;
};

export default getDay;