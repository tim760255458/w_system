<template>
  <div class="edit">
    <el-card>
      <div slot="header" class="edit-header"><i class="el-icon-edit" style="margin-right: 5px;"></i>编辑器</div>
      <div class="edit-content">
        <quillEditor
          v-model="content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          @change="onEditorChange($event)"
          style="height: 380px;"></quillEditor>
      </div>
      <el-button type="primary" class="editBtn">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

export default {
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: '在这里输入内容...'
      }
    }
  },
  components: {
    quillEditor
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  methods: {
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    }
  }
}
</script>

<style scoped>
  .edit{
    width: 100%;
    text-align: left;
  }
  .edit-header{
    font-size: 14px;
    color: #97a8be;
    text-align: left;
  }
  .edit-content{
    text-align: left;
    height: 450px;
  }
  .editBtn{
    margin-top: 10px;
  }
</style>