<template>
    <div>
        <h1>Привет из админки</h1>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
}

</script>