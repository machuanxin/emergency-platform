<template>
  <div id="crimeChart" class="mapChartContainer chartBackground" />
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      crimeChart: null
    }
  },
  mounted () {
    this.initChart()
  },

  methods: {
    initChart () {
      this.crimeChart = echarts.init(document.getElementById('crimeChart'))
      this.crimeChart.setOption({
        title: {
          text: '明尼阿波利斯市犯罪数量统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{c}' + '人'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        xAxis: {
          type: 'category',
          data: ['5-16', '5-17', '5-18', '5-19', '5-20', '5-21', '5-22', '5-23', '5-24', '5-25', '5-26',
            '5-27', '5-28', '5-29', '5-30', '5-31', '6-1', '6-2', '6-3', '6-4', '6-5', '6-6', '6-7', '6-8',
            '6-9', '6-10', '6-11', '6-12', '6-13', '6-14', '6-15']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [42, 50, 71, 71, 61, 55, 61, 46, 62, 66, 78, 144, 202, 171, 92, 47, 47, 38, 42, 48, 55, 44, 54, 49, 52, 46, 50, 57, 57, 60, 69],
            type: 'bar'
          }
        ]
      })
    }
  }
}
</script>
