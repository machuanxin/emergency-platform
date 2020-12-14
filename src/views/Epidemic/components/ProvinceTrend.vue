<template>
  <div :id="id" class="chartContainer chartBackground"  />
</template>

<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)

export default {
  props: {
    id: {
      type: String,
      default: 'provinceTrendChart'
    }
  },
  data () {
    return {
      chart: null,
      list: [],
      date: [],
      provinceData: [],
      option: {
        baseOption: {
          timeline: {
            axisType: 'category',
            autoPlay: true,
            playInterval: 2000,
            symbolSize: 5,
            left: '3%',
            right: '3%',
            bottom: '0%',
            width: '94%',
            data: [],
            tooltip: {
              formatter: []
            }
          },
          tooltip: {
            show: true,
            formatter: function (params) {
              return params.name + '：' + params.value
            }
          },
          visualMap: {
            type: 'piecewise',
            pieces: [
              {
                min: 10001,
                color: '#73240D'
              },
              {
                min: 1001,
                max: 10000,
                color: '#BB0000'
              },
              {
                min: 501,
                max: 1000,
                color: '#BD430A'
              },
              {
                min: 101,
                max: 500,
                color: '#E08150'
              },
              {
                min: 11,
                max: 100,
                color: '#E9B090'
              },
              {
                min: 1,
                max: 10,
                color: '#F2DDD2'
              },
              {
                value: 0,
                color: 'white'
              }
            ],
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],
            textStyle: {
              color: '#7B93A7'
            },
            bottom: '8%',
            left: '1%'
          },
          grid: {
            right: '5%',
            top: '20%',
            bottom: '10%',
            width: '20%'
          },
          xAxis: {
            show: false
          },
          yAxis: [
            {
              inverse: true,
              offset: '2',
              type: 'category',
              data: '',
              nameTextStyle: {
                color: '#fff'
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  fontSize: 14,
                  color: '#000000'
                },
                interval: 0
              },
              axisLine: {
                show: false,
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
            }
          ],
          geo: {
            map: 'china',
            right: '35%',
            left: '5%',
            label: {
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                areaColor: '#FFFF00 '
              }
            }
          },
          series: [
            {
              name: 'mapSer',
              type: 'map',
              map: 'china',
              roam: false,
              geoIndex: 0,
              label: {
                show: false
              }
            },
            {
              name: '',
              type: 'bar',
              barWidth: '40%',
              label: {
                normal: {
                  show: true,
                  fontSize: 14,
                  position: 'right',
                  formatter: '{c}'
                }
              }
            }
          ]
        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
        options: []
      }
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById(this.id))
      var _this = this
      this.$http.get('provinceTrend')
        .then(resp => {
          this.list = resp.data.provinceTotalList
          this.list.map(function (item, index) {
            _this.provinceData.push({
              name: item.province,
              value: item.caseTotal
            })
            if (index > 0 && (index + 1) % 34 === 0) {
              var processDate = item.date.slice(5)
              _this.date.push(processDate)
              _this.provinceData
                .sort(function (a, b) {
                  return b.value - a.value
                })
                .slice(0, 6)
              _this.provinceData.sort(function (a, b) {
                return a.value - b.value
              })
              var res1 = []
              var res2 = []
              for (var i = 0; i < 10; i++) {
                res1[i] =
                  _this.provinceData[_this.provinceData.length - 1 - i].name
                res2[i] =
                  _this.provinceData[_this.provinceData.length - 1 - i].value
              }
              _this.option.options.push({
                timeline: {
                  data: _this.date,
                  tooltip: {
                    formatter: _this.date
                  }
                },
                title: [
                  {
                    text:
                      _this.date[(index + 1) / 34 - 1] +
                      ' COVID-19省级行政区确诊人数',
                    textStyle: {
                      color: '#2D3E53',
                      fontSize: 20
                    },
                    left: 180,
                    top: 10
                  },
                  {
                    show: true,
                    text: '确诊人数前十的省级行政区',
                    textStyle: {
                      color: '#2D3E53',
                      fontSize: 18
                    },
                    right: '5%',
                    top: '15%'
                  }
                ],
                yAxis: {
                  data: res1
                },
                series: [
                  {
                    type: 'map',
                    data: _this.provinceData
                  },
                  {
                    type: 'bar',
                    data: res2,
                    itemStyle: {
                      normal: {
                        color: '#990000' // 100% 处的颜色
                      }
                    }
                  }
                ]
              })
              _this.provinceData = []
            }
          })
          this.chart.setOption(_this.option)
        })
    }
  }
}
</script>
