<template>
  <div id="epidemicChart" class="mapChartContainer chartBackground" />
</template>
<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      epidemicChart: null,
      list: [],
      date: [],
      newCase: [],
      option: {
        title: {
          text: '美国确诊病例图',
          fontSize: 5
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['新增确诊']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          data: []
        },
        yAxis: {},
        series: {
          name: '新增确诊',
          type: 'line',
          symbolSize: 1,
          data: []
        }
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.epidemicChart = echarts.init(
        document.getElementById('epidemicChart')
      )
      this.epidemicChart.setOption(this.option)
      var _this = this
      this.$http.get('USCase').then(resp => {
        this.list = resp.data.list
        this.list.map(function (item, index) {
          _this.date.push(item.date)
          _this.newCase.push(item.newCase)
        })
        this.epidemicChart.setOption({
          xAxis: {
            data: _this.date
          },
          series: {
            name: '新增确诊',
            data: _this.newCase
          }
        })
      })
    }
  }
}
</script>
