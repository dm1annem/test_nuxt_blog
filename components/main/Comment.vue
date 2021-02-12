<template>
    <el-card class="comment">
        <div class="comment-header">
            <span class="name">Имя</span>
            <span>
                <i class="el-icon-time"></i>
                {{ new Date().toLocaleString() }}
            </span>
        </div>

        <div class="comment-text">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </el-card>
</template>

<script>
export default {
    props:['comment']
        
    
}
</script>

<style lang="scss" scoped>
.comment{
    margin-bottom: 0.5rem;
}
.comment-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;

}

.comment-text{
white-space: pre-line;
}
</style>