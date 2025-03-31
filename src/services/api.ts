import axiosInstance from './axiosConfig';

export const searchProducts = async (query: string) => {
  try {
    const response = await axiosInstance.get('/products/search', {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Search products error:', error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/auth/register', {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};

export const getFavorites = async () => {
  try {
    const response = await axiosInstance.get('/users/favorites');
    return response.data;
  } catch (error) {
    console.error('Get favorites error:', error);
    throw error;
  }
};

export const addToFavorites = async (productId: string) => {
  try {
    const response = await axiosInstance.post('/users/favorites', {
      productId
    });
    return response.data;
  } catch (error) {
    console.error('Add to favorites error:', error);
    throw error;
  }
}; 