<template>
    <a-card>
        <a-form layout="vertical" @finish="handleSubmit" :model="formUser">
            <a-form-item label="Tên" name="name" required>
                <a-input v-model:value="formUser.name" />
            </a-form-item>
            <a-form-item label="Email" name="email" required>
                <a-input v-model:value="formUser.email" />
            </a-form-item>
            <a-button type="primary" html-type="submit">Lưu</a-button>
            <a-button style="margin-left: 10px" @click="$router.push('/')">Hủy</a-button>
        </a-form>
    </a-card>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { userStore } from '../store/userStore';

const route = useRoute();    // Lấy thông tin URL (VD /edit/:id).
const router = useRouter();  // Điều hướng trang
const formUser = reactive({ name: '', email: '' });

onMounted(() => {
    if (route.params.id) { // Nếu id tồn tại (tức là form Update User: /edit/:id)
        const user = userStore.users.find(user => user.id == route.params.id);  // Tìm thấy user theo id
        if (user) Object.assign(formUser, user);      // Khi đang ở url /edit/:id => formUser sẽ chứa thông tin User cần sửa
    }
});

const handleSubmit = () => {
    if (route.params.id) {
        userStore.updateUser(parseInt(route.params.id), formUser);
    } else {
        userStore.addUser(formUser);
    }
    router.push('/');
};
</script>