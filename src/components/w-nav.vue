<template>
    <div class="w-nav">
        <el-menu default-active="/index" router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
            <el-menu-item index="/index"><i class="el-icon-setting"></i>自述</el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>导航一</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/table/1"><i class="el-icon-document"></i>用户表格</el-menu-item>
            <el-menu-item index="/edit/1"><i class="el-icon-edit"></i>编辑器</el-menu-item>
            <el-menu-item index="/chart/1"><i class="el-icon-date"></i>图表</el-menu-item>
            <el-menu-item index="/upload/1"><i class="el-icon-upload"></i>文件上传</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
</script>

<style scoped>
  .w-nav{
    width: 250px;
    text-align: left;
  }
</style>