import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a425a2117929b01b77ef1d31ab46e08df200cb0c0545e9197f29b2ac3a71ef3f'
    }
});