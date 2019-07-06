<template>
  <el-table
    :data="tableData"
    max-height="1000"    
    stripe
    style="width:100%"
    :default-sort="{prop:'user',order:'descending'}"
  >
    <el-table-column prop="user" fixed label="User" width="110" sortable>
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.isActive}}</p>
          <p>住址:</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name}}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="FullName" width="110" sortable></el-table-column>
    <el-table-column prop="gender" label="Gender" width="80"></el-table-column>
    <el-table-column
      prop="enroll"
      label="Enroll"
      width="110"
      sortable
      :filters="[{text:'2019',value:'2019'}]"
      :filter-method="filterHandler"
    ></el-table-column>
    <el-table-column prop="studentID" label="StudentID" width="120" sortable></el-table-column>
    <el-table-column prop="institute" label="Institute" width="110" sortable></el-table-column>
    <el-table-column prop="avatar" label="Avatar" width="200" sortable></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
      </template>
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="success" size="mini" icon="el-icon-search">view</el-button>
        <el-button @click="handleClick(scope.row)" type="primary" size="mini" icon="el-icon-edit">edit</el-button>
        <el-button @click="handleClick(scope.row)" type="danger" size="mini" icon="el-icon-delete">delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { METHODS } from "http";
import { constants } from "crypto";

export default {
  data() {
    return {
      dataPath:{
        //路径参数  顺序是从左到右
        menuName:'Student',
        path:'/',
        name:'学生详情',
        redirect:'dashboard'
      },
      tableData: [
        {
          user: "wangxiaoming",
          name: "王小明",
          gender: "男",
          enroll: "2019",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: true
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        },
        {
          user: "wangxiao",
          name: "王小",
          gender: "男",
          enroll: "2016",
          studentID: "151210515",
          institute: "香山学院",
          avatar:
            "https://jh-test-oss.oss-cn-beijing.aliyuncs.com/hzt_avatar.jpg",
          isActive: false
        }
      ]
    };
  },

  methods: {
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>
