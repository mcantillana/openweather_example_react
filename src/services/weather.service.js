import { config } from '../config';
import axios from 'axios';

export function fetchWeather(location) {

    let url = `${config.API_URL}/weather?q=${location}&appid=${config.APP_ID}`;
    
    return axios.get(url)
}