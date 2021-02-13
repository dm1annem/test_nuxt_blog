<template>
    <el-form 
    :model="controls" 
    :rules="rules" 
    ref="form"
    @submit.native.prevent="onSubmit"
    >
        <el-form-item label="Имя" prop="name">
            <el-input v-model.trim="controls.name"/>
        </el-form-item>

        <el-form-item label="Ваш комментарий" prop="text">
            <el-input 
            v-model.trim="controls.text"
            type="textarea"
            resize="none"
            :rows="2"
            ></el-input>
        </el-form-item>
  
        <el-form-item >
            <el-button 
            type="primary"
            native-type="submit"
            round
            >Разместить комментарий</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
            controls:{
              name: '',
              text: '',
            },

            rules:{
                name:[
                    {
                    required: true,
                    message: 'Имя должно быть заполнено',
                    triger: 'blur'
                }
                ],
                text:[
                    {
                    required: true,
                    message: 'Введите ваш комментарий.',
                    triger: 'blur'   
                    }]
        }
        
      }
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate(valid => {
          if (valid) {
            alert('submit!');
          } 
        });
      },
    }
  }
</script>