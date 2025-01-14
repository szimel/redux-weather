import axios from "axios"

export const FETCH_DATA = 'FETCH_DATA'

const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='
const GEO_URL = 'https://api.openweathermap.org/data/2.5/forecast?'
const API = '&appid=959d275eae1f10794b2be3475af21fdf'

export function getData(data) {
  const format = data.City;
  const request = axios.post(`${ROOT_URL}${format}${API}`);

  return {
    type: FETCH_DATA,
    payload: request
  }
};

export function GetData(data) {
  const latitude = `lat=${data.coords.latitude}`;
  const longitude = `&lon=${data.coords.longitude}`;
  const request = axios.post(`${GEO_URL}${latitude}${longitude}${API}`);
  
  return {
    type: FETCH_DATA,
    payload: request
  }
};