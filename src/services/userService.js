import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

// Tạo một instance của axios
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const userApi = {
    async getUsers() {
        try {
            const response = await apiClient.get(API_URL);
            return response;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    },

    async getUserById(id) {
        try {
            const response = await apiClient.get(`${API_URL}/${id}`);
            return response;
        } catch (error) {
            console.error(`Error fetching user with ID ${id}:`, error);
            throw error;
        }
    },

    async createUser(userData) {
        try {
            const response = await apiClient.post(API_URL, userData);
            return response;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    },

    async deleteUser(id) {
        try {
            await apiClient.delete(`${API_URL}/${id}`);
        } catch (error) {
            console.error(`Error deleting user with ID ${id}:`, error);
            throw error;
        }
    },
}