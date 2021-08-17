import axios from 'axios';

const api = axios.create({
  baseURL: "https://nameless-escarpment-38217.herokuapp.com/reportedevents"
});

export default api;