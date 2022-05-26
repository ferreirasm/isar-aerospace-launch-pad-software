import axios from 'axios';

axios.defaults.headers.common['Authorization'] = '0DB9D71DE67';


const getLaunchDataService = () => axios.get('https://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumStatus?token=0DB9D71DE67');
const postLaunchDataService = (goingUp: boolean) => axios.get(`https://isaraerospace-webdeveloper-assignment.azurewebsites.net/api/SpectrumChangeDirection?token=0DB9D71DE67&direction=${goingUp}`);

export default {
    getLaunchDataService,
    postLaunchDataService,
};
