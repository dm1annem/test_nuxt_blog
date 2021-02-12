<template>
  <el-card
  shadow="hover"
  body-style="{padding: 0;}"
  class="post"
  >
    <header slot="header">
      <h2>Заголовок поста</h2>
    </header>

    <small class="post-header">
      {{ new Date().toLocaleString() }}
    </small>

    <div class="post-body">
      <img src="https://3.downloader.disk.yandex.ru/preview/417377e6c5d9b9e33dee979f24a91fe868ffa0b8b6a6d0b72eda4b09c58307d8/inf/LT3zIpb_94JO1q4ZcKdstlQIXzN2vo8eIcaj1lSNvu3_SUUUz7cMFY0PZtzwtfik5V88H7S0WAADGiCnkqWZ1Q==?uid=37352729&filename=2012-05-05+13.45.04.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=37352729&size=1632x910" 
      alt="" 
      class="post-img"
      >
    </div>

    <footer class="post-footer">
      <el-button round @click="openPost"> Открыть </el-button>

      <span>
        <i class="el-icon-s-comment">12</i>
      </span>
    </footer>

  </el-card>
</template>

<script>
export default {
  methods:{
    openPost(){

    }
  },
   
};
</script>

<style lang="scss" scoped>
.post{
  margin-bottom: 1.5rem;

}
.post-header{

}
.post-body{

}
.post-img{

}
.post-footer{

}
</style>