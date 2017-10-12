<template>
  <div class="WChart">
    <el-card>
      <div slot="header" class="WChart-header"><i class="el-icon-date" style="margin-right: 5px;"></i>图表</div>
      <div class="WChart-content">
        <schart :canvasId="chart1.canvasId"
          :type="chart1.type"
          :width="chart1.width"
          :height="chart1.height"
          :data="chart1.data"
          :options="chart1.options"></schart>
        <el-button type="primary" @click="changeDate">修改图表</el-button>
        <schart :canvasId="chart2.canvasId"
          :type="chart2.type"
          :width="chart2.width"
          :height="chart2.height"
          :data="chart2.data"
          :options="chart2.options"></schart>
        <schart :canvasId="chart3.canvasId"
          :type="chart3.type"
          :width="chart3.width"
          :height="chart3.height"
          :data="chart3.data"
          :options="chart3.options"></schart>
        <schart :canvasId="chart4.canvasId"
          :type="chart4.type"
          :width="chart4.width"
          :height="chart4.height"
          :data="chart4.data"
          :options="chart4.options"></schart>
      </div>
    </el-card>
  </div>
</template>

<script>
import Schart from 'vue-schart'

export default {
  data () {
    return {
      chart1: {
        canvasId: 'wuanCanvas1',
        type: 'bar',
        width: 400,
        height: 300,
        data: [
          { name: '2014', value: 1234 },
          { name: '2015', value: 2341 },
          { name: '2016', value: 3241 },
          { name: '2017', value: 3344 }
        ],
        options: {
          title: '午安星球数量统计表1（柱状图）',
          bgColor: '#ddd',
          titleColor: '#000',
          fillColor: '#000', // 默认填充颜色
          axisColor: '#000', // 坐标轴颜色
          contentColor: '#000', // 内容横线颜色
          titlePosition: 'bottom'
        }
      },
      chart2: {
        canvasId: 'wuanCanvas2',
        type: 'line',
        width: 400,
        height: 300,
        data: [
          { name: '2014', value: 1234 },
          { name: '2015', value: 2341 },
          { name: '2016', value: 3241 },
          { name: '2017', value: 3344 }
        ],
        options: {
          title: '午安星球数量统计表2（折线图）'
        }
      },
      chart3: {
        canvasId: 'wuanCanvas3',
        type: 'pie',
        width: 500,
        height: 400,
        data: [
          { name: '111', value: 1234 },
          { name: '222', value: 2345 },
          { name: '333', value: 3000 },
          { name: '444', value: 3456 }
        ],
        options: {
          title: '午安星球数量统计表3（饼状图）',
          radius: 100, // 饼图半径
          bgColor: '#161823',
          legendColor: '#fff', // 图例文本颜色
          titleColor: '#fff'
        }
      },
      chart4: {
        canvasId: 'wuanCanvas4',
        type: 'ring',
        width: 500,
        height: 400,
        data: [
          { name: '2014', value: 1234 },
          { name: '2015', value: 2341 },
          { name: '2016', value: 3241 },
          { name: '2017', value: 3344 }
        ],
        options: {
          title: '午安星球数量统计表4（环状图）',
          bgColor: '#161823',
          legendColor: '#fff',
          titleColor: '#fff',
          radius: 100,
          innerRadius: 70
        }
      }
    }
  },
  components: {
    Schart
  },
  methods: {
    changeDate () {
      // 整个 Data 被重新赋值
      this.chart1.data = [
        { name: '短袖', value: 1200 },
        { name: '休闲裤', value: 1222 },
        { name: '连衣裙', value: 1283 },
        { name: '外套', value: 1314 }
      ]
      // Data 里一个属性值被修改
      this.$set(this.chart1.data, 1, { name: '短裙', value: 500 })
      // 触发此函数后，图表会重新渲染
    }
  }
}
</script>

<style scoped>
  .WChart{
    width: 100%;
  }
  .WChart-header{
    font-size: 14px;
    color: #97a8be;
    text-align: left;
  }
  .WChart-content{
    font-size: 14px;
    text-align: left;
  }
</style>