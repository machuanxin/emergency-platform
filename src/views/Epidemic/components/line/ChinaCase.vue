<template>
  <div :id="id" class="lineChartContainer"/>
</template>
<script>
import echarts from 'echarts'

export default {
  props: {
    id: {
      type: String,
      default: 'chinaCaseChart'
    },
    type: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      chinaCaseChart: null,
      list: [],
      date: [],
      newCase: [],
      totalCase: [],
      nowCase: [],
      severeChange: [],
      nowSevere: [],
      newDeath: [],
      totalDeath: [],
      newCure: [],
      totalCure: [],
      newSuspect: [],
      nowSuspect: [],
      cureRate: [],
      deathRate: [],
      option1: {
        title: {
          text: '全国确诊病例图',
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
          data: ['新增确诊', '累计确诊', '现存确诊']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        series: [
          {
            name: '新增确诊',
            type: 'line',
            symbolSize: 1,
            data: []
          },
          {
            name: '累计确诊',
            type: 'line',
            symbolSize: 1,
            data: []
          },
          {
            name: '现存确诊',
            type: 'line',
            symbolSize: 1,
            data: []
          }
        ]
      },
      option2: {
        title: {
          text: '重症病例'
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
          data: ['重症变化', '现存重症']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        series: [
          {
            name: '重症变化',
            type: 'line',
            symbolSize: 1,
            data: []
          },
          {
            name: '现存重症',
            type: 'line',
            symbolSize: 1,
            data: []
          }
        ]
      },
      option3: {
        title: {
          text: '死亡病例'
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
          data: ['新增死亡', '累计死亡']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        series: [
          {
            name: '新增死亡',
            type: 'line',
            symbolSize: 2,
            data: []
          },
          {
            name: '累计死亡',
            type: 'line',
            symbolSize: 2,
            data: []
          }
        ]
      },
      option4: {
        title: {
          text: '治愈病例'
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
          data: ['新增治愈', '累计治愈']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        series: [
          {
            name: '新增治愈',
            type: 'line',
            symbolSize: 2,
            data: []
          },
          {
            name: '累计治愈',
            type: 'line',
            symbolSize: 2,
            data: []
          }
        ]
      },
      option5: {
        title: {
          text: '疑似病例'
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
          data: ['新增疑似', '现存疑似']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        series: [
          {
            name: '新增疑似',
            type: 'line',
            symbolSize: 2,
            data: []
          },
          {
            name: '现存疑似',
            type: 'line',
            symbolSize: 2,
            data: []
          }
        ]
      },
      option6: {
        title: {
          text: '治愈率/死亡率'
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{a}: {c}%<br/>{a1}: {c1}%',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['治愈率', '死亡率']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        yAxis: {
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %'
          },
          show: true
        },
        series: [
          {
            name: '治愈率',
            type: 'line',
            symbolSize: 1,
            data: []
          },
          {
            name: '死亡率',
            type: 'line',
            symbolSize: 1,
            data: []
          }
        ]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chinaCaseChart = echarts.init(document.getElementById('chinaCaseChart'))
      this.chinaCaseChart.showLoading()
      switch (this.type) {
        case '1':
          this.chinaCaseChart.setOption(this.option1)
          break
        case '2':
          this.chinaCaseChart.setOption(this.option2)
          break
        case '3':
          this.chinaCaseChart.setOption(this.option3)
          break
        case '4':
          this.chinaCaseChart.setOption(this.option4)
          break
        case '5':
          this.chinaCaseChart.setOption(this.option5)
          break
        case '6':
          this.chinaCaseChart.setOption(this.option6)
          break
      }
      var _this = this
      this.$http.get('chinaCase').then(resp => {
        this.list = resp.data.list
        this.list.map(function (item, index) {
          var processDate = item.date.slice(5)
          _this.date.push(processDate)
          _this.newCase.push(item.newCase)
          _this.totalCase.push(item.totalCase)
          _this.nowCase.push(item.nowCase)
          _this.severeChange.push(item.severeChange)
          _this.nowSevere.push(item.nowSevere)
          _this.newDeath.push(item.newDeath)
          _this.totalDeath.push(item.totalDeath)
          _this.newCure.push(item.newCure)
          _this.totalCure.push(item.totalCure)
          _this.newSuspect.push(item.newSuspect)
          _this.nowSuspect.push(item.nowSuspect)
          _this.cureRate.push(item.cureRate)
          _this.deathRate.push(item.deathRate)
        })
        switch (this.type) {
          case '1':
            this.chinaCaseChart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增确诊',
                  data: _this.newCase
                },
                {
                  name: '累计确诊',
                  data: _this.totalCase
                },
                {
                  name: '现存确诊',
                  data: _this.nowCase
                }
              ]
            })
            break
          case '2':
            this.chinaCaseChart.setOption({
              // 加载数据图表
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '重症变化',
                  data: _this.severeChange
                },
                {
                  name: '现存重症',
                  data: _this.nowSevere
                }
              ]
            })
            break
          case '3':
            this.chinaCaseChart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增死亡',
                  data: _this.newDeath
                },
                {
                  name: '累计死亡',
                  data: _this.totalDeath
                }
              ]
            })
            break
          case '4':
            this.chinaCaseChart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增治愈',
                  data: _this.newCure
                },
                {
                  name: '累计治愈',
                  data: _this.totalCure
                }
              ]
            })
            break
          case '5':
            this.chinaCaseChart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '新增疑似',
                  data: _this.newSuspect
                },
                {
                  name: '现存疑似',
                  data: _this.nowSuspect
                }
              ]
            })
            break
          case '6':
            this.chinaCaseChart.setOption({
              xAxis: {
                data: _this.date
              },
              series: [
                {
                  name: '治愈率',
                  data: _this.cureRate
                },
                {
                  name: '死亡率',
                  data: _this.deathRate
                }
              ]
            })
        }
      })
      this.chinaCaseChart.hideLoading() // 隐藏 loading 效果
    }
  }
}
</script>
