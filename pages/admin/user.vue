<template>
    <el-card
    shadow="always"
    :style="{ width: '500px' }"
    >

        <h2> Создать нового пользавателя </h2>

        <el-form 
        :model="controls" 
        :rules="rules" 
        ref="form"
        @submit.native.prevent="onSubmit"

        

        >
                <el-form-item label="Логин" prop="login">
                    <el-input v-model.trim="controls.login"/>
                </el-form-item>
                
                <div class="mb2">
                <el-form-item label="Пароль" prop="password" show-password>
                    <el-input 
                    v-model.trim="controls.password" type="password"></el-input>
                </el-form-item>
                </div>
        
                <el-form-item >
                    <el-button 
                    type="primary"
                    native-type="submit"
                    round
                    :loading="loading"
                    >Создать</el-button>
                </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth'],

    data() {
        return{
            loading: false,

            controls:{
              login: '',
              password: '',
            },

            rules:{
                login:[
                    {required: true, message: 'Введите логин', trigger: 'blur' }
                ],

                password:[

                    {required: true, message: 'Введите пароль', trigger: 'blur' },
                    {min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur'}

                                        
                ]
            }
        }
    },

    methods:{
        
        onSubmit(){
            this.$refs.form.validate(async valid=>{
                if(valid){
                    this.loading = true
                }

                try{
                    const formData = {
                        login: this.controls.login,
                        password: this.controls.password
                    }

                    await this.$store.dispatch('auth/createUser', formData)
                    this.$message.success('Новый пользователь успешно добавлен')
                    this.controls.login = ''
                    this.controls.password = ''
                    this.loading = false

                } catch(e) {
                    this.loading = false
                }
            })
        }
    }
}
</script>