import axios from 'axios';

const BASE_URL = 'https://638928344eccb986e88d52db.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};

export const postContacts = async contact => {
  const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
  return data;
};
