<template>
    <div class="page-wrap">
        <el-breadcrumb separator="/" class="mb">
            <el-breadcrumb-item to="/admin/list/">Список постров</el-breadcrumb-item>
            <el-breadcrumb-item>Пост {{ post.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <h3></h3>

        <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
        >
                <el-form-item label="Текст в формате .md или .html" prop="text">
                    <el-input 
                    type="textarea"
                    resize="none"
                    v-model="controls.text"
                    :rows="10"
                />
                </el-form-item>
                
                <div class="mb">
                    <small class="mr">
                        <i class="el-icon-time"></i>
                        <span>{{ new Date(post.date).toLocaleString()  }}</span>
                    </small>

                    <small>
                        <i class="el-icon-view"></i>
                        <span>{{ post.veiws}}</span>
                    </small>
                </div>
        
                <el-form-item >
                    <el-button 
                    type="primary"
                    native-type="submit"
                    round
                    :loading="loading"
                    >Обновить</el-button>
                </el-form-item>
        </el-form>
    </div>

</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head(){
        return{
            title: `Пост - ${this.post.title}`
        }
    },

    validate({params}){
        return Boolean(params.id)
    },

    async asyncData({ store,  params}) {
        const post = await store.dispatch('post/fitchAdmynById', params.id)
        return {post}
    },

    data() {
        return{
            loading: false,

            controls:{
              text: '',
              
            },

            rules:{
                text:[
                    {required: true, message: 'Поле не должно быть пустым', trigger: 'blur' }
                ],

            }
        }
    },

    methods: {
        onSubmit(){
            this.$refs.form.validate(async valid => {
                this.loading = true

                const formData ={
                    text: this.controls.text,
                    id: this.post._id
                }

                try{
                    await this.$store.dispatch('post/update', formData)
                    this.$message.success('Пост обновлён')
                    this.loading = false
                }catch(e){
                    this.loading = false
                }
                
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.page-wrap{
    width: 600px;
}

.mr{
    margin-right: 2rem;
}
</style>