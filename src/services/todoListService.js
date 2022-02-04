import axios from 'axios';

const API_URL = process.env.API_URL || 'http://localhost:9000/api/v1/list';

const getAll = async () => {
  return axios.get(API_URL);
};

const create = data => {
  console.log('API_URL', API_URL);
  
  return axios.post(API_URL, data);
};

const update = (id, data) => {
  return axios.put(API_URL + `/${id}`, data);
};

const remove = id => {
  return axios.delete(API_URL + `/${id}`);
};

export default {
  getAll,
  create,
  update,
  remove,
};