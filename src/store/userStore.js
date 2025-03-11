import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import userApi from '../services/userService';

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        user: null,
    }),

    actions: {
        async fetchUsers() {
            try {
                const response = await userApi.getUsers();
                this.users = response; // Lưu danh sách user vào state
            } catch (error) {
                console.error("Lỗi khi lấy danh sách người dùng:", error);
            }
        },
    },

    async fetchUserById(id) {
        try {
            const response = await userApi.getUserById(id);
            this.user = response; // Lưu user vào state
        } catch (error) {
            console.error(`Lỗi khi lấy thông tin user ID ${id}:`, error);
        }
    },

    async addUser(userData) {
        try {
            const response = await userApi.createUser(userData);
            this.users.push(response); // Cập nhật danh sách user
        } catch (error) {
            console.error("Lỗi khi thêm user:", error);
        }
    },

    async removeUser(id) {
        try {
            await userApi.deleteUser(id);
            this.users = this.users.filter(user => user.id !== id); // Xóa user khỏi danh sách
        } catch (error) {
            console.error(`Lỗi khi xóa user ID ${id}:`, error);
        }
    },
});

// reactive(): Dùng để quản lý state của object (Làm việc với Object có nhiều thuộc tính)
// ref(): Dùng để quản lý state cho biến đơn (String, Number, Boolean, Object, Array)