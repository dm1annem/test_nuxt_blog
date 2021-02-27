<template>
    <el-table
    :data="posts"
    style="width: 100%">

    <el-table-column
    prop="title"
    label="Название"
    />
    <el-table-column label="Дата">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString()  }}</span>
      </template>
    </el-table-column>
    <el-table-column
    prop="veiws"
    label="Просмотры">
      <template slot-scope="{row: {veiws}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ veiws  }}</span>
      </template>
    </el-table-column>

    <el-table-column
    prop="comments"
    label="Коммментарии">
      <template slot-scope="{row: {comments}}">
        <i class="el-icon-chat-square"></i>
        <span style="margin-left: 10px">{{ comments.length  }}</span>
      </template>
    </el-table-column>

    <el-table-column
      label="Действия">
      <template slot-scope="{row}">
        <el-tooltip effect="dark" content="Открыть пост для редактирования" placement="top">
          <el-button
          icon="el-icon-edit"
          circle
          type="primary"
          @click="open(row._id)"/>
        </el-tooltip>
        
        <el-tooltip effect="dark" content="Удалить пост" placement="top">
          <el-button
          icon="el-icon-delete"
          circle
          type="danger"
          @click="remove(row._id)"/>
        </el-tooltip>

        
      </template>
    </el-table-column>
  </el-table>
</template>


<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    data(){
        return{
            
        }
    },

    async asyncData({store}) {
        const posts = await store.dispatch('post/fitchAdminPosts')
        
        return {posts}
    },
    
    methods: {
      open(id){
        this.$router.push(`/admin/post/${id}` )
        
      },

      async remove(id){
        try{
          await this.$confirm('Удалить пост?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Не удалять',
            type: 'warning'
          })
          await this.$store.dispatch('post/remove', id)
          this.posts = this.posts.filter(p => p._id !== id)
          this.$message.success('Пост успешно удалён')
        }catch(e){}
      }
    }



     
}
</script>