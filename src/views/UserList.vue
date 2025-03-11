<template>
    <div>
        <a-table :dataSource="userStore.users" :columns="columnsUser" rowKey="id">
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

<script setup>// Xử lý logic
import { userStore } from '../store/userStore';

const columnsUser = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Tên', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Actions', dataIndex: 'actions' }
];

const deleteUser = (id) => {
    userStore.deleteUser(id);
};
</script>