<template>
  <div style="padding:30px 40px;">
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      
      <el-table-column
        label="发布日期"
        prop="date">
      </el-table-column>

      <el-table-column
        label="楼盘名称"
        prop="name">
      </el-table-column>

      <el-table-column
        label="售楼地址"
        prop="address">
      </el-table-column>

      <el-table-column
        label="楼盘地址"
        prop="address">
      </el-table-column>

      <el-table-column
        label="建筑面积"
        prop="jianzumj">
      </el-table-column>

      <el-table-column
        label="占地面积"
        prop="jianzumj">
      </el-table-column>

      <el-table-column
        label="单价"
        prop="price">
      </el-table-column>





      <el-table-column
        align="right">

        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>

        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2019-05-02',
          name: '万科精修小洋楼',
          address: '佛山市禅城区朝安江路1518弄',
          jianzumj: '120m²',
          price: '108万'
        },
        {
          date: '2019-12-02',
          name: '碧桂园',
          address: '广州市白云区金沙州5119',
          jianzumj: '110m²',
          price: '98万'
        },
        {
          date: '2019-07-26',
          name: '星晖南湾别墅',
          address: '佛山市桂城金沙路自编20号',
          jianzumj: '130m²',
          price: '169万'
        },
        {
          date: '2016-05-02',
          name: '星辉家园',
          address: '上海市普陀区金沙江路151弄',
          jianzumj: '100m²',
          price: '88万'
        }, 
        ],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>

<style scoped>
    .el-table{
        line-height: 40px;
    }
</style>
