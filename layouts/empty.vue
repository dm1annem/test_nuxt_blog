<template>
    <div class="empty-layout">
        <nuxt/>
    </div>
</template>

<script>
export default {
    computed: {
        error(){
            return this.$store.getters.error
        }
    },

    watch: {
        error(value) {
            // debugger
            console.log(value)
        }
    }
}
</script>

<style lang="scss" scoped>
.empty-layout{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 4rem;
}
</style>