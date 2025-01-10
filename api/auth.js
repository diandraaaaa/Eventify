import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth';

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, { email, password });
        return response.data; // Assume the API returns a token or user data
    } catch (error) {
        console.error('Login error:', error);
        throw error.response?.data || 'An error occurred during login.';
    }
};
