import axios from 'axios';

const instance = axios.create({
    baseURL: 'Deltahacks2020Api-env.udk3cejkdz.us-east-1.elasticbeanstalk.com',
});

export default instance;