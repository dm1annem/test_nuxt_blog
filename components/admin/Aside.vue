<template>

  <el-menu
    :style="{height: '100%'}"
    default-active="2"
    router
    >

    <el-menu-item index="/admin">
        <i class="el-icon-document"></i>
        <span>Аналитика</span>
    </el-menu-item>

    <el-menu-item index="/admin/create">
        <i class="el-icon-document"></i>
        <span>Создать</span>
    </el-menu-item>

    <el-menu-item index="/admin/list">
        <i class="el-icon-document"></i>
        <span>Посты</span>
    </el-menu-item>

    <el-menu-item index="/admin/user">
        <i class="el-icon-document"></i>
        <span>Пользователи</span>
    </el-menu-item>

    <el-menu-item index="/admin/logout">
        <i class="el-icon-document"></i>
        <span>Выход</span>
    </el-menu-item>
      
  </el-menu>

    
</template>