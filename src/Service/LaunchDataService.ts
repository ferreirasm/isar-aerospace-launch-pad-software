import axios from 'axios';

const getLaunchDataService = () => axios.get('https://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumStatus?token=0DB9D71DE67');
const postLaunchDataService = (goingUp: boolean) => axios.post('');

export default {
    getLaunchDataService,
    postLaunchDataService,
};
