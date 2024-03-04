import axios from 'axios';


export const axiosClient = axios.create({
    baseURL: `${process.env.API_URL}/api`,
    // baseURL: 'https://develop-royalview-next.vercel.app/api',
    
    headers: {
        'Content-Type': 'application/json',
    },
});

