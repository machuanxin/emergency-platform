<template>
  <div id="peopleChart" class="chartContainer chartBackground"/>
</template>
<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      peopleChart: null,
      option: {
        title: {
          subtext: '数据来自网络'
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['type', '户籍人口', '常住人口'],
            ['洪山区', 121.96, 171.29],
            ['武昌区', 110.34, 128.54],
            ['黄陂区', 116.33, 102.8],
            ['江夏区', 64.69, 98.7],
            ['江岸区', 78.59, 96.28],
            ['新洲区', 97.29, 91.6],
            ['硚口区', 53.99, 86.89],
            ['蔡甸区', 46.95, 78.49],
            ['江汉区', 51.36, 72.98],
            ['汉阳区', 71.79, 67.0],
            ['东西湖区', 35.5, 60.13],
            ['青山区', 45.96, 52.9],
            ['汉南区', 11.67, 11.67]
          ]
        },
        xAxis: {},
        yAxis: { type: 'category' },
        series: [{ type: 'bar' }, { type: 'bar' }]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.peopleChart = echarts.init(document.getElementById('peopleChart'))
      this.peopleChart.setOption(this.option)
    }
  }
}
</script>
