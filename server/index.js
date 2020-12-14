const express = require('express')
const app = express()
const globalCase = require('../public/epidemic/globalCase.js')
const chinaCase = require('../public/epidemic/chinaCase.js')
const hubeiCase = require('../public/epidemic/hubeiCase.js')
const wuhanCase = require('../public/epidemic/wuhanCase.js')
const provinceTrend = require('../public/epidemic/provinceTrend.js')
const hubeiTrend = require('../public/epidemic/hubeiTrend.js')
const USCase = require('../public/floyd/USCase.js')
const protest = require('../public/floyd/protest.js')
// 允许前台跨域
app.use(require('cors')())

// 全球病例分布
app.get('/api/globalCase', (req, res) => {
  res.send(globalCase)
})

// 中国病例图表数据
app.get('/api/chinaCase', (req, res) => {
  res.send(chinaCase)
})
// 湖北病例图表数据
app.get('/api/hubeiCase', (req, res) => {
  res.send(hubeiCase)
})
// 武汉病例图表数据
app.get('/api/wuhanCase', (req, res) => {
  res.send(wuhanCase)
})
// 省份趋势数据
app.get('/api/provinceTrend', (req, res) => {
  res.send(provinceTrend)
})
// 湖北趋势数据
app.get('/api/hubeiTrend', (req, res) => {
  res.send(hubeiTrend)
})

// 美国病例图表数据
app.get('/api/USCase', (req, res) => {
  res.send(USCase)
})

// 游行抗议数据
app.get('/api/protest', (req, res) => {
  res.send(protest)
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
