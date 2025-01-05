import { create } from 'zustand';
import axiosInstance from '../utils/axios.js'

const useChat = create(set => ({
  chats: [],
  activeChat: null,
  loading: false,
  error: null,

  fetchChats: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/chats');
      set({ chats: response.data, loading: false });
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to fetch chats';
      set({ error: errorMessage, loading: false });
    }
  },

  createChat: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/chats', data);
      set(state => ({ chats: [...state.chats, response.data], loading: false }));
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to create chat';
      set({ error: errorMessage, loading: false });
    }
  },

  updateChat: async (chatId, data) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.put(`/chats/${chatId}`, data);
      set(state => ({
        chats: state.chats.map(chat => chat._id === chatId ? response.data : chat),
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to update chat';
      set({ error: errorMessage, loading: false });
    }
  },

  removeChat: async (chatId) => {
    set({ loading: true, error: null });
    try {
      await axiosInstance.delete(`/chats/${chatId}`);
      set(state => ({
        chats: state.chats.filter(chat => chat._id !== chatId),
        loading: false,
      }));
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to remove chat';
      set({ error: errorMessage, loading: false });
    }
  },
}));

export default useChat;
