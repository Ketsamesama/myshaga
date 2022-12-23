import axios from 'axios';
import { API_URL } from 'shared/api';

const fetchApplication = async (page: number) => {
  try {
    const { data } = await axios.get(`${API_URL}/applications?page=${page}`);
    return data;
  } catch (err) {
    return err;
  }
};

export { fetchApplication };
