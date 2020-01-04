<template>
  <div class="page">
    <div class="login-box">
        <h4>采房后台管理</h4>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="formLabelAlign.password"></el-input>
          </el-form-item>
      </el-form>
       <el-button id="login" @click="login" type="success">登录</el-button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'home',
  data(){
    return{
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
created(){
    // let par = {
    //   "number": "925029931",
    //   "password": "2063197522",
    //   "email": "925029931@qq.com",
    //   "phone": "15360664445"
    // }
    // console.log(par)
    // var headers = {headers:{'Content-Type':'application/json;charset=UTF-8'}}

    // this.$http.post('/cf-user/register',par).then(res=>{
    //   console.log(res.data)
    // })

    // this.$http.post('/getRegisterCaptcha',JSON.stringify(par),headers).then(res=>{
    //   console.log(res.data)
    // })


    // this.$http({
    //   method: "post",
    //   url:"/getRegisterCaptcha",
    //   data: {
    //     "number": "sfasf",
    //     "password": "10321321",
    //     "email": "925029931@qq.com",
    //     "phone":"15360664445"
    //   },
    //   headers: {
    //     "Content-Type": 'application/x-www-form-urlencoded'
    //   }
    // }).then((res)=>{

    // })
  },
  methods:{
    login(){
       this.$router.push({ path: '/Home'})
    }
  }
}
</script>

<style scoped>
    .page{
        background: url("../assets/img/bg.jpg") no-repeat;
        background-size: cover;
        background-color: #464646;
        background-attachment: fixed;
        background-position: center center;
        height: 100%;
        width: 100%;
    }

    .login-box{
        background: white;
        position: absolute;
        top: 32%;
        right: 18%;
        padding: 50px 30px;
        border-radius: 8px;
    }

    #login{
      width: 100%;
    }
</style>
