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
import { useUserStore  } from '../store/userStore';
import { onMounted } from 'vue';

const userStore = useUserStore();

const columnsUser = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Tên', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Số điện thoại', dataIndex: 'phone' },
    { title: 'Giới tính', dataIndex: 'gender' },
    { title: 'Địa chỉ', dataIndex: 'address' },
    { title: 'Ảnh đại diện', dataIndex: 'avatar' },
    { title: 'Ngày tạo', dataIndex: 'createAt' },
    { title: 'Cập nhật lần cuối', dataIndex: 'updatedAt' },
    { title: 'Actions', dataIndex: 'actions' }
];

// Gọi API để lấy danh sách user
onMounted(() => {
    console.log("onMounted: fetchUsers...");
    userStore.fetchUsers(); // Gọi API để lấy danh sách user
});

const deleteUser = (id) => {
    userStore.removeUser(id);
};
</script>