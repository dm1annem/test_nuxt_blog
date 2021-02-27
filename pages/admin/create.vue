<template>
    <div>
        <h1 class="mb">Создать новый пост</h1>

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

                <el-form-item label="Введите название поста" prop="title">
                    <el-input 
                    v-model="controls.title"
                />
                </el-form-item>
                
        
                <el-form-item >
                    <el-button 
                    type="primary"
                    native-type="submit"
                    round
                    :loading="loading"
                    >Cоздать пост</el-button>
                </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],

    data() {
        return{
            loading: false,

            controls:{
              text: '',
              title: '',
              
            },

            rules:{
                text:[
                    {required: true, message: 'Поле не должно быть пустым', trigger: 'blur' }
                ],
                title:[
                    {required: true, message: 'Заголовок не должен быть пустым', trigger: 'blur' }
                ],

            }
        }
    },

    methods: {
        onSubmit(){
            this.$refs.form.validate(async valid =>{
                if(valid){
                    this.loading = true

                    const formData = {
                        text: this.controls.text,
                        title: this.controls.title
                    }
                    try {
                    await this.$store.dispatch('post/create', formData)
                    this.controls.title = ''
                    this.controls.text = ''
                    
                    this.$message.success('Пост создан') 
                    } catch (error) {
                        
                    } finally{
                        this.loading = false
                    }
                    
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
form{
    width: 600px;
}
</style>