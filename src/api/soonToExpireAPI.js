import axios from 'axios';

const BASE_URL = 'https://651b9a0a194f77f2a5ae9b01.mockapi.io';
const soonToExpireAPI = axios.create({ baseURL: BASE_URL });

export default soonToExpireAPI;
