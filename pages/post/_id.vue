<template>
    <article class="post">
        <header class="post-header">
            <div class="post-title">
                <h1 >Post title</h1>
                <nuxt-link to="/">
                    <i class="el-icon-back"></i>
                </nuxt-link>
            </div>

            <div class="post-info">
                <small >
                    <i class="el-icon-date"></i>
                    {{ new Date().toLocaleString() }}
                </small>

                <small>
                    <i class="el-icon-view"></i>
                    42
              </small>    
            </div>

            <div class="post-img">
                <img src="https://3.downloader.disk.yandex.ru/preview/417377e6c5d9b9e33dee979f24a91fe868ffa0b8b6a6d0b72eda4b09c58307d8/inf/LT3zIpb_94JO1q4ZcKdstlQIXzN2vo8eIcaj1lSNvu3_SUUUz7cMFY0PZtzwtfik5V88H7S0WAADGiCnkqWZ1Q==?uid=37352729&filename=2012-05-05+13.45.04.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=37352729&size=1632x910" 
                alt="Post image" 
                >
            </div>
            

        </header>

        <main class="post-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam voluptate minus quidem illum tenetur alias ratione porro odit dolor. Impedit nostrum culpa nulla quisquam necessitatibus asperiores accusantium deleniti error corrupti.</p>
        </main>

        <footer>
            <!-- Form -->

            <div class="comments" v-if="true">
                <app-comment
                v-for="comment in 5"
                :key="comment"
                :comment="comment"
            ></app-comment>
            </div>
            <div v-else>
                <span>Комментариев пока нет</span>
            </div>
        </footer>

        
    </article>
</template>

<script>
import AppComment from '@/components/main/Comment.vue'
export default {
    components:{
        AppComment,
    },
    validate({params}){
        return Boolean(params.id)
    }
}
</script>

<style lang="scss" scoped>

.post{
    max-width: 600px;
    margin: 0 auto;
}

.post-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.post-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

}

.post-img img{
    width: 100%;
    height: auto;

}

.post-header{
    margin-bottom: 1.5rem;
}

.post-content{
    margin-bottom: 2rem;
}
</style>