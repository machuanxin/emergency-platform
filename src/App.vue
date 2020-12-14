<template>
  <div id="app" style="min-width:1200px;">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-divider--horizontal {
  margin: 8px 0;
  background: 0 0;
  border-top: 1px dashed #e8eaec;
}
.chartBackground {
  background: #fff;
}
h2{
  text-align:center;
  color:#409EFF;
}
.lineChartContainer{
  width: 80%;
  height: 400px;
  padding: 50px;
  margin: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.chartContainer{
  height: 650px;
  padding: 10px;
  margin: auto;
}
.mapChartContainer{
  width: 99%;
  height: 99%;
  padding: 20px 0px 0px 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.chartDiv{
  width:600px;
  height:400px;
  top:10%;
  left:20%;
  padding: 30px 40px 40px 30px;
  background:#fff;
  position:absolute;
}
</style>
