<template>
  <div class="w-table">
    <el-card>
      <div slot="header" class="table-header"><i class="el-icon-document" style="margin-right: 5px;"></i>星球表格</div>
      <div class="table-content">
        <div class="edit-table">
          <el-button
            type="primary"
            @click="deleteLists"><i class="el-icon-delete" style="margin-right: 5px;"></i>批量删除</el-button>
            <el-input
              type="text"
              placeholder="搜索关键词"
              v-model="searchCon"
              icon="search"
              :on-icon-click="handleIconClick"
              style="width: 300px;margin-left: 10px;"></el-input>
        </div>
        <el-table
          :data="filterData"
          border
          stripe
          style="width: 100%;margin-bottom: 10px;"
          @select="handleSelect"
          @selection-change="handleSelectionChange"
          :default-sort = "{prop: 'member_num', order: 'descending'}">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="星球名称"
            prop="name">
            <template scope="scope">
              <span>{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="星球ID"
            sortable
            prop="id">
            <template scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="成员数"
            sortable
            prop="member_num">
            <template scope="scope">
              <span>{{ scope.row.member_num }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="星球介绍"
            prop="introduction">
            <template scope="scope">
              <span>{{ scope.row.introduction }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pages">
          <el-pagination
            layout="prev, pager, next"
            :total="100"
            @current-change="handleCurrentChange">
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getPlanetList } from 'api/api'

export default {
  data () {
    return {
      planetData: [],
      filterData: [],
      offset: 0,
      limit: 20,
      deleteList: [],
      searchCon: ''
    }
  },
  watch: {
    searchCon: function () {
      console.log('ddfdfdfdfd')
      this.handleIconClick()
    }
  },
  methods: {
    deleteLists () {
      const self = this
      this.filterData = this.planetData.filter(filterDelData)
      this.$message(`您删除了 ${self.deleteList.length}条数据`)
      function filterDelData (el) {
        let len = self.deleteList.length
        let isDel = false
        for (var i = 0; i < len; i++) {
          if (el.name === self.deleteList[i].name) {
            isDel = false
            break
          } else {
            isDel = true
          }
        }
        return isDel
      }
    },
    handleIconClick () {
      const self = this
      this.filterData = this.planetData.filter(function (el) {
        if (self.searchCon === '') {
          return el
        }
        if (el.name.indexOf(self.searchCon) > -1 || el.introduction.indexOf(self.searchCon) > -1) {
          return el
        } else {
          return false
        }
      })
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.filterData.splice(index, 1)
      this.$message(`您删除了 ${row.name}`)
    },
    handleSelect (selection, row) {
      console.log('selection, row: ' + selection + ' row: ' + row)
    },
    handleSelectionChange (selection) {
      this.deleteList = selection
    },
    handleCurrentChange (val) {
      this.offset = 20 * (val - 1)
      getPlanetList(this.offset, this.limit).then(response => {
        this.planetData = response.data.data
        this.filterData = response.data.data
      })
    }
  },
  mounted () {
    getPlanetList(this.offset, this.limit).then(response => {
      this.planetData = response.data.data
      this.filterData = response.data.data
    })
  }
}
</script>

<style scoped>
  .w-header{
    width: 100%;
  }
  .table-header{
    font-size: 14px;
    color: #97a8be;
    text-align: left;
  }
  .table-content{
    font-size: 14px;
    text-align: left;
  }
  .pages{
    text-align: center;
  }
  .edit-table{
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
</style>