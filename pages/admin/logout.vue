<template>
    <h1>очищаем данные</h1>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],

    beforeCreate(){
        this.$store.dispatch('auth/logaut')
        this.$router.push('/admin/login?message=logaut')
    }
}
</script>