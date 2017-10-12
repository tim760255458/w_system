<template>
  <div class="Upload">
    <el-card>
      <div slot="header" class="Upload-header"><i class="el-icon-upload" style="margin-right: 5px;"></i>文件上传</div>
      <div class="Upload-content">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
    </el-card>
  </div>
</template>

<script>
</script>

<style scoped>
  .Upload{
    width: 100%;
  }
  .Upload-header{
    font-size: 14px;
    color: #97a8be;
    text-align: left;
  }
  .Upload-content{
    text-align: left;
  }
</style>