<template>
    <div>
        <h1 class="mb">Создать новый пост</h1>

        <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"
        >
                
                <el-form-item label="Введите название поста" prop="title">
                    <el-input 
                    v-model="controls.title"
                />
                </el-form-item>
                
                <el-form-item class="mb2" label="Текст в формате .md или .html" prop="text">
                    <el-input 
                    type="textarea"
                    resize="none"
                    v-model="controls.text"
                    :rows="10"
                />
                </el-form-item>

                <el-button class="mb1" type="success" plain @click="previewDialog = true" >Предпросмотр</el-button>

                <el-dialog
                    title="Предпросмотр"
                    :visible.sync="previewDialog"
                    >
                    <div :key="controls.text">
                        <vue-markdown>{{controls.text}}</vue-markdown>
                    </div>
                    

                </el-dialog>

                <el-upload
                    
                    class="mb2"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="hendleImageChenge"
                    :auto-upload="false"
                    ref="upload"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">Перетащите изображение <em>или нажмите</em></div>
                    <div class="el-upload__tip" slot="tip">Допускаются файлы в формате jpg или png </div>
                </el-upload>

                
                
                
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
    components:{
        // VueMarkdown,
    },
    

    data() {
        return{
            image: null,
            loading: false,
            previewDialog: false,

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
        hendleImageChenge(file, fileList){
            this.image = file.raw
        },

        onSubmit(){
            this.$refs.form.validate(async valid =>{
                if(valid && this.image){
                    this.loading = true
                    

                    const formData = {
                        text: this.controls.text,
                        title: this.controls.title,
                        image: this.image
                    }
                    try {
                    await this.$store.dispatch('post/create', formData)
                    this.controls.title = ''
                    this.controls.text = ''
                    this.image = null
                    this.$refs.upload.clearFiles()
                    this.$message.success('Пост создан') 
                    } catch (error) {
                        
                    } finally{
                        this.loading = false
                    }
                    
                } else{
                    this.$message.warning('Форма не валидна')
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