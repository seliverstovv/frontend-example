import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const fetcher = (url: string) => axios.get(url).then(res => res.data);