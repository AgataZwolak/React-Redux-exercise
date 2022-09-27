const axios = require('axios').default;

export const client = axios.create({
  headers: { 'Access-Control-Allow-Origin' : '*', 'Access-Control-Allow-Headers': '*' },
  baseURL: 'https://jsonplaceholder.typicode.com',
});
