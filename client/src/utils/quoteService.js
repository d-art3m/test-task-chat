import axios from 'axios';

export const getRandomQuote = async () => {
  try {
    const response = await axios.get('/api/random');
    return response.data[0].q;
  } catch (error) {
    return 'Lorem ipsum dolor sit amet consectetuer';
  }
}