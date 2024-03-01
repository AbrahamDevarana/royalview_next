import axios from 'axios';


export const axiosClient = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_HOST}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});


