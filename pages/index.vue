<template>
    <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="18" :md="16" :lg="14" :xl="12">
            <app-post
            v-for="post in 5"
            :key="post"
            />

        </el-col>
    </el-row>
  
</template>

<script>
import AppPost from '@/components/main/Post.vue'
export default {
    head:{
        title: 'Главная по розам'
    },
    components:{
        AppPost
    }

}
</script>

<style>

</style>
