import getTime from '../utils/getTime';

const Clock = async () => {
    const view = 
    `
        <span id="clock" class="text-7xl" id="clock">${await getTime()}</span>
    `;
    return view;
};

export default Clock;