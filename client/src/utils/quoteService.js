import axiosInstance from './axios';

export const getRandomQuote = async () => {
  try {
    const response = await axiosInstance.get('/messages/random');
    return response.data.quote;
  } catch (error) {
    return 'Lorem ipsum dolor sit amet consectetuer';
  }
}