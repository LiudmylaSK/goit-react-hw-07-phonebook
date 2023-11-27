import axios from 'axios';

export const fetchContacts = async () => {
  const { data } = await axios.get(
    'https://656226efdcd355c083249c42.mockapi.io/contacts/'
  );
  return data;
};

export const addContact = async value => {
  const { data } = await axios.post(
    'https://656226efdcd355c083249c42.mockapi.io/contacts/',
    value
  );

  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(
    `https://656226efdcd355c083249c42.mockapi.io/contacts/${id}`
  );
  return data;
};
