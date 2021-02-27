<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item to="/admin/list/">Список постров</el-breadcrumb-item>
            <el-breadcrumb-item>Пост {{ $route.params.id }}</el-breadcrumb-item>
        </el-breadcrumb>
        <h3></h3>
    </div>

</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
}
</script>