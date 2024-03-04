import axios from 'axios';


export const axiosClient = axios.create({
    baseURL: `${process.env.API_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});


console.log('axiosClient', axiosClient.defaults.baseURL);


