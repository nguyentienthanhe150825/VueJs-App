import { reactive, ref } from 'vue';

export const userStore = reactive({
    users: [],
    addUser(user) {
        user.id = Date.now();
        this.users.push(user);
    },
    updateUser(id, updatedUser) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users[index] = { ...updatedUser, id };
        }
    },
    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
});
