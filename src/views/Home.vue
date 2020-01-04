<template>
  <div class="page">
  <el-container>
       <!-- 左侧栏 -->
      <el-aside width="200px">
          <!-- logo -->
          <img src="../assets/img/logo.jpg" style="height:56px;width:100px" alt="">

          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="房源管理" name="1">
              <div><router-link to="/home/add">发布房源</router-link></div>
              <div><router-link to="/home/edit">编辑房源</router-link></div>
            </el-collapse-item>
            <el-collapse-item title="我的发布" name="2">
              <div>
                  <div><router-link to="/home/edit">编辑房源</router-link></div>
              </div>
            </el-collapse-item>
        </el-collapse>
      </el-aside>

    <el-container>
       <!-- 标题头 -->
      <el-header>
        <div> </div>

        <div style="display:flex;color:white;font-size:14px;">
          <!-- 管理员 -->
          <div style="display:flex;margin-rigth:23px; width:170px">
            <img src="../assets/img/admin-icon.png" style="margin-top:18px;margin-right:4px;width:21px;height:21px" alt="">
            <div>管理员:白嘉措</div> 
          </div>

          <!-- 退出登录 -->
          <div style="display:flex;">
            <img src="../assets/img/close.png" style="margin-top:20px;margin-right:4px;width:20px;height:20px" alt="">
            <div>退出登录</div> 
          </div>

        </div>
        
      </el-header>

      <!-- main主题 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

  </div>
</template>

<script>
import add from '../components/add.vue'
import edit from '../components/edit.vue'
export default {
  name: 'home',
  data(){
    return{
       activeNames: ['1']
    }
  },
  components: {
    add,
    edit
  },
  methods:{
    handleChange(val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
  .page{
    height: 100%;
  }
  


  
  .el-container{
    height: 100%;
  }

  .el-header, .el-footer {
    background-color:rgb(57, 61, 73);
    text-align: left!important;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 60px!important;
    display: flex;
    justify-content: space-between;
  }
  
  .el-aside {
    background-color:rgb(253, 97, 23);
    color: #333;
    text-align: center;
  }
  
  .el-collapse{
    background-color: skyblue!important;
  }

  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: left;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40p;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-collapse-item__content{
    padding-bottom: 0px!important;
  }

  .el-collapse-item__content > div{
    height: 30px;
    line-height: 30px;
  }

  .el-collapse-item__content > div:hover{
    color: rgb(257, 97, 23);
  }

  .el-collapse-item{
    background: rgb(231, 122,305);
  }

</style>
