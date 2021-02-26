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
        <el-button
          icon="el-icon-edit"
          circle
          type="primary"
          @click="open(row._id)"></el-button>

        <el-button
          icon="el-icon-delete"
          circle
          type="danger"
          @click="remove(row._id)"></el-button>
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
        console.log('open',id)
      },

      remove(id){
        console.log('remove',id)
      }
    }



     
}
</script>