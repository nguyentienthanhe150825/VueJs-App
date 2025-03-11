<template>
    <a-card>
        <a-form layout="vertical" @finish="handleSubmit" :model="form">
            <a-form-item label="Tên" name="name" required>
                <a-input v-model:value="form.name" />
            </a-form-item>
            <a-form-item label="Email" name="email" required>
                <a-input v-model:value="form.email" />
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

const route = useRoute();
const router = useRouter();
const form = reactive({ name: '', email: '' });

onMounted(() => {
    if (route.params.id) {
        const user = userStore.users.find(user => user.id == route.params.id);
        if (user) Object.assign(form, user);
    }
});

const handleSubmit = () => {
    if (route.params.id) {
        userStore.updateUser(parseInt(route.params.id), form);
    } else {
        userStore.addUser(form);
    }
    router.push('/');
};
</script>