import { create } from 'zustand';
import axiosInstance from '../utils/axios.js'
import useChat from './useChat.js';

const useMessage = create(set => ({
  messages: [],
  loading: false,
  error: null,

  fetchMessages: async (chatId) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get(`/messages/${chatId}`);
      set({ messages: response.data, loading: false });
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to fetch messages';
      set({ error: errorMessage, loading: false });
    }
  },

  sendMessage: async (chatId, data) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post(`/messages/${chatId}`, data);
      if (useChat.getState().activeChat._id === chatId) {
        set(state => ({ messages: [...state.messages, response.data] }));
      }
      set({ loading: false });
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to send message';
      set({ error: errorMessage, loading: false });
    }
  },

  reset: () => set({ messages: [], loading: false, error: null }),
}));

export default useMessage;
