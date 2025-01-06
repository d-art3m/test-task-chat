import { create } from 'zustand';
import axiosInstance from '../utils/axios.js'
import useMessage from './useMessage.js';

const useChat = create((set, get) => ({
  chats: [],
  activeChat: null,
  searchQuery: '',
  loading: false,
  error: null,

  getChats: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.get('/chats');

      const filteredChats = response.data.filter(chat => {
        const chatFirstName = chat.firstName.toLowerCase();
        const chatLastName = chat.lastName.toLowerCase();
        const query = get().searchQuery.trim().toLowerCase();

        return chatFirstName.includes(query) || chatLastName.includes(query);
      });

      set({ chats: filteredChats, loading: false });
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to fetch chats';
      set({ error: errorMessage, loading: false });
    }
  },

  createChat: async (data) => {
    set({ loading: true, error: null });
    try {
      const response = await axiosInstance.post('/chats', data);
      set(state => ({
        chats: [...state.chats, response.data],
        loading: false,
        searchQuery: ''
      }));
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

      if (chatId === get().activeChat._id) {
        set({ activeChat: null });
        useMessage.getState().reset();
      }
    } catch (error) {
      const errorMessage = error.response?.data.error || 'Failed to remove chat';
      set({ error: errorMessage, loading: false });
    }
  },

  setActiveChat: chat => set({ activeChat: chat }),

  setSearchQuery: query => set({ searchQuery: query }),
}));

export default useChat;
