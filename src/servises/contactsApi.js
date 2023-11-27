import axios from 'axios';

const api = axios.create({
  baseURL: 'https://656226efdcd355c083249c42.mockapi.io/contacts/',
});

export const fetchContacts = async () => {
  const { data } = await api.get('/');
  return data;
};

export const addContact = async value => {
  const { data } = await api.post('/', value);
  return data;
};

export const deleteContact = async id => {
  const { data } = await api.delete(`/${id}`);
  return data;
};
