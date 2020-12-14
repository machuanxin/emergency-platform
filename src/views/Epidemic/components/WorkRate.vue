<template>
  <div :id="id" class="chartContainer chartBackground" />
</template>

<script>
import echarts from 'echarts'

export default {
  props: {
    id: {
      type: String,
      default: 'workRateChart'
    }
  },
  data () {
    return {
      workRateChart: null,
      list: [],
      date: [],
      option: {
        timeline: {
          axisType: 'category',
          autoPlay: true,
          playInterval: 5000,
          symbolSize: 5,
          width: '60%',
          data: ['2-25', '3-3', '3-10', '3-17', '3-24', '3-31', '4-7']
        },
        baseOption: {
          title: {
            text: '',
            right: '2%',
            bottom: '10%',
            textStyle: {
              fontSize: 50,
              color: '#666'
            }
          },
          tooltip: {
            'trigger': 'axis',
            formatter: '{b}:{c}%'
          },
          grid: {
            left: '6%',
            right: '2%',
            bottom: '8%',
            top: '2%',
            containLabel: true
          },
          yAxis: [{
            type: 'category',
            data: '',
            nameTextStyle: {
              color: '#fff'
            },
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: '#333'
              },
              interval: 0
            },
            axisLine: {
              lineStyle: {
                color: '#333'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#333'
              }
            }
          }],
          xAxis: [{
            'type': 'value',
            'name': '',
            splitNumber: 8,
            nameTextStyle: {
              color: '#333'
            },
            axisLine: {
              lineStyle: {
                color: '#333'
              }
            },
            axisLabel: {
              formatter: '{value} %'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#ccc'
              }
            }
          }],
          series: [{
            'name': '',
            'type': 'bar',
            markLine: {
              lineStyle: {
                normal: {
                  color: 'red',
                  width: 3
                }
              }
            },
            barWidth: '40%',
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}%'
              }
            },
            itemStyle: {
              normal: {
                color: '#409EFF'
              }
            }
          }],
          animationDurationUpdate: 2000,
          animationEasingUpdate: 'quinticInOut'
        },
        options: []
      },
      count: 0
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.workRateChart) {
      return
    }
    this.workRateChart.dispose()
    this.workRateChart = null
  },
  methods: {
    initChart () {
      this.workRateChart = echarts.init(document.getElementById(this.id))
      var _this = this
      var res = []
      this.$http.get('http://47.97.211.164/covid19/frontend/listcitywork').then(resp => {
        this.list = resp.data.list
        this.list.map(function (item, index) {
          res.push({
            name: item.city,
            value: item.rate
          })
          if (index === 18 || index === 56 || index === 94 || index === 132 || index === 170 || index === 207 || index === 245) {
            var processDate = item.date.slice(5)
            _this.date.push(processDate)
            res.sort(function (a, b) {
              return b.value - a.value
            }).slice(0, 6)
            res.sort(function (a, b) {
              return a.value - b.value
            })
            var res1 = []
            var res2 = []
            for (var t = 0; t < res.length; t++) {
              res1[t] = res[t].name
              res2[t] = res[t].value
            }
            _this.option.options.push({
              timeline: {
                data: _this.date,
                tooltip: {
                  formatter: _this.date
                }
              },
              title: {
                text: _this.date[_this.count]
              },
              yAxis: {
                data: res1
              },
              series: [{
                data: res2
              }]
            })
            res = []
            _this.count = _this.count + 1
          }
        })
        this.workRateChart.setOption(_this.option)
      })
    }
  }
}
</script>
