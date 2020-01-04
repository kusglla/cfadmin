<template>
  <div style="padding:10px 150px 100px 200px">
    <div class="title">新房发布</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="*楼盘名称">
        <el-input v-model="form.name" placeholder="请输入楼盘名称"></el-input>
      </el-form-item>
    
      <el-form-item label="*建筑面积">
        <el-input v-model="form.name" placeholder="请输入建筑面积"></el-input> m²
      </el-form-item>

      <el-form-item label="*占地面积">
        <el-input v-model="form.name" placeholder="占地面积"></el-input> m²
      </el-form-item>

      <el-form-item label="*容积率">
        <el-input v-model="form.name" placeholder="容积率"></el-input> %
      </el-form-item>

      <el-form-item label="*绿化率">
        <el-input v-model="form.name" placeholder="绿化率"></el-input> %
      </el-form-item>

      <el-form-item label="*总户数">
        <el-input v-model="form.name" placeholder="总户数"></el-input> 个
      </el-form-item>

      <el-form-item label="*车位">
        <el-input v-model="form.name" placeholder="车位"></el-input> 个
      </el-form-item>
      
      <el-form-item label="*物业情况">
        <el-input v-model="form.name" placeholder="物业类型"></el-input>
      </el-form-item>
      
     <div style="display:flex;">
         <el-form-item label="*物业情况">
        <el-select v-model="form.region" placeholder="物业类型">
          <el-option label="别墅" value="bieshu"></el-option>
          <el-option label="商铺" value="shangpu"></el-option>
          <el-option label="住宅" value="zhuzai"></el-option>
          <el-option label="厂房" value="changfang"></el-option>
          <el-option label="公寓" value="gongyu"></el-option>
          <el-option label="写字楼" value="xiezilou"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="*装修描述">
        <el-select v-model="form.zhuangxiu" placeholder="装修情况">
          <el-option label="装修" value="zhuangxiu"></el-option>
          <el-option label="毛坯" value="maopi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="*产权">
        <el-select v-model="form.chanquan" placeholder="产权年限">
          <el-option label="40年" value="40"></el-option>
          <el-option label="50年" value="50"></el-option>
          <el-option label="70年" value="70"></el-option>
        </el-select>
      </el-form-item>
     </div>

      <el-form-item label="*售楼地址">
        <el-input v-model="form.name" placeholder="请输入如xx市xx区xx号"></el-input>
      </el-form-item>

      <el-form-item label="*楼盘地址">
        <el-input v-model="form.name" placeholder="请输入如xx市xx区xx号"></el-input>
      </el-form-item>

      <el-form-item label="*开发商">
        <el-input v-model="form.name" placeholder="开发商"></el-input>
      </el-form-item>
      
      <el-form-item label="*物业公司">
        <el-input v-model="form.name" placeholder="物业公司"></el-input>
      </el-form-item>

      <el-form-item label="*备案号">
        <el-input v-model="form.name" placeholder="备案号"></el-input>
      </el-form-item>

      <el-form-item label="*预售许可证">
        <el-input v-model="form.name" placeholder="预售许可证"></el-input>
      </el-form-item>

      <el-form-item label="*售楼电话">
        <el-input v-model="form.name" placeholder="售楼电话"></el-input>
      </el-form-item>

      <el-form-item label="*楼盘动态">
        <el-input v-model="form.name" placeholder="楼盘动态"></el-input>
      </el-form-item>

       <el-form-item label="*销售状态">
        <el-select v-model="form.zhuangtai" placeholder="销售状态">
          <el-option label="待售" value="daishou"></el-option>
          <el-option label="在售" value="zaishou"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="*单价">
        <el-input v-model="form.price" placeholder="单价"></el-input>
      </el-form-item>

      <el-form-item label="*物业费">
        <el-input v-model="form.name" placeholder="物业费"></el-input>
      </el-form-item>

      <el-form-item label="*优惠折扣">
        <el-input v-model="form.name" placeholder="优惠折扣"></el-input>
      </el-form-item>

      <el-form-item label="*开盘时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="*交付时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      
      <div style="display:flex; flex-wrap:wrap">
        <div style="width:50%">
          <h3 class="upload-title">区位图</h3>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview1"
            :on-remove="handleRemove1"
            :file-list="fileList1"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="file1">开始上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
     
        <div style="width:50%">
          <h3 class="upload-title">效果图</h3>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview2"
            :on-remove="handleRemove2"
            :file-list="fileList2"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="file2">开始上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
             
        <div style="width:50%">
          <h3 class="upload-title">实景图</h3>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview3"
            :on-remove="handleRemove3"
            :file-list="fileList3"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="file3">开始上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      

        <div style="width:50%">
          <h3 class="upload-title">样板图</h3>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview4"
            :on-remove="handleRemove4"
            :file-list="fileList4"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="file4">开始上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>

      
 
     


      <el-form-item style="margin-top:80px; margin-left:0px; text-align:center">
        <el-button type="primary" @click="onSubmit">确认发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>

      
     


      <!-- <el-form-item label="*户型标题"  placeholder="户型标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="*房屋户型">
        <el-input v-model="form.name" placeholder="房屋户型"></el-input>
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script>
   export default {
    data() {
      return {
        form: {
          name: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          price:'',
          region: '',
          zhuangxiu: '',
          chanquan:'',
          zhuangtai:'',


          fileList1:  [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}],
          fileList2:  [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}],
          fileList3:  [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}],
          fileList4:  [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },

      handleRemove1(file, fileList1) {
        console.log(file, fileList1);
      },
      handlePreview1(file) {
        console.log(file);
      },
      handleExceed1(files, fileList1) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList1.length} 个文件`);
      },
      beforeRemove1(file, fileList1) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },

      //分割线----------
       handleRemove2(file, fileList2) {
        console.log(file, fileList2);
      },
      handlePreview2(file) {
        console.log(file);
      },
      handleExceed2(files, fileList2) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList1.length} 个文件`);
      },
      beforeRemove2(file, fileList2) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },

      // 分割线----------------------------
       handleRemove3(file, fileList3) {
        console.log(file, fileList3);
      },
      handlePreview3(file) {
        console.log(file);
      },
      handleExceed3(files, fileList3) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList1.length} 个文件`);
      },
      beforeRemove3(file, fileList3) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },

      // 分割线----------------------
      handleRemove4(file, fileList4) {
        console.log(file, fileList4);
      },
      handlePreview4(file) {
        console.log(file);
      },
      handleExceed4(files, fileList4) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList1.length} 个文件`);
      },
      beforeRemove4(file, fileList4) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },


      file1(){

      },
      file2(){

      },
      file3(){

      },
      file4(){
        
      }
    }
  }
</script>

<style>
  .title{
    text-align:left;
    color:#ff6117;
    font-size:1.3em;
    line-height: 80px;
  }
  .el-input{
    width: 70%!important;
    margin-left: 10px;
  }
  .el-main{
    text-align: left!important;
  }

  /* 图片选项 */
  .el-upload-list{
    /* width:500px; */
  }

  .el-upload__tip{
    line-height: 30px;
  }
  
  .upload-demo{
    line-height: 20px;
  }

  .upload-title{
    line-height: 30px
  }
</style>
