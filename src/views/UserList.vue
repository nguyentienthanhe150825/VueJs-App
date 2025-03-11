<template>
    <div>
        <a-table :dataSource="userStore.users" :columns="columns" rowKey="id">
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'actions'">
                    <a-button type="link" @click="$router.push(`/edit/${record.id}`)">Sửa</a-button>
                    <a-button type="link" danger @click="deleteUser(record.id)">Xóa</a-button>
                </template>
            </template>
        </a-table>
        <a-button type="primary" @click="$router.push('/create')">Thêm User</a-button>
    </div>
</template>

<script setup>
import { userStore } from '../store/userStore';

const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Tên', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Hành động', dataIndex: 'actions' }
];

const deleteUser = (id) => {
    userStore.deleteUser(id);
};
</script>