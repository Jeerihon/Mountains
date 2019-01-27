import axios from 'axios';

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';

const token = localStorage.getItem('token');
console.log(token);

axios.defaults.header['Authorization'] = '';

export default axios;