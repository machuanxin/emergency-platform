<template>
  <div class="dashboard-container">
    <el-row :gutter="32">
      <el-col :span="18">
        <div>
          <global-case></global-case>
        </div>
      </el-col>
      <el-col :span="6">
        <div>
          <global-list></global-list>
        </div>
      </el-col>
    </el-row>
    <div class="tab">
      <el-radio-group v-model="line" size="medium">
        <el-radio-button label="全国"></el-radio-button>
        <el-radio-button label="湖北"></el-radio-button>
        <el-radio-button label="武汉"></el-radio-button>
      </el-radio-group>
    </div>
        <el-row :gutter="20">
       <el-col :span="12"><h2 style="margin-bottom:20px;">疫情数据图表</h2></el-col>
        <el-col :span="12"><h2 style="margin-bottom:20px;">援鄂医疗队人数</h2></el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="12">
        <div v-if="line=='全国'">
          <china-case-line></china-case-line>
        </div>
        <div v-else-if="line=='湖北'">
          <hubei-case-line></hubei-case-line>
        </div>
        <div v-else>
          <wuhan-case-line></wuhan-case-line>
        </div>
      </el-col>
      <el-col :span="12">
        <div>
          <aid-doctor></aid-doctor>
        </div>
      </el-col>
    </el-row>

    <div class="tab">
      <el-radio-group v-model="trend" size="medium">
        <el-radio-button label="全国"></el-radio-button>
        <el-radio-button label="湖北"></el-radio-button>
      </el-radio-group>
    </div>
     <el-row :gutter="20">
       <el-col :span="14"><h2 style="margin-bottom:20px;">疫情趋势图</h2></el-col>
        <el-col :span="10"><h2 style="margin-bottom:20px;">全国复工指数</h2></el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="14">
        <div v-if="trend=='全国'">
          <province-trend></province-trend>
        </div>
        <div v-else>
          <hubei-trend></hubei-trend>
        </div>
      </el-col>
      <el-col :span="10">
        <work-rate></work-rate>
      </el-col>
    </el-row>
         <el-row :gutter="20">
       <el-col :span="14"><h2 style="margin:30px;">武汉市医疗机构分布</h2></el-col>
        <el-col :span="10"><h2 style="margin:30px;">武汉市人口分布</h2></el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :span="14">
        <hospital-map></hospital-map>
      </el-col>
      <el-col :span="10">
        <people></people>
      </el-col>
    </el-row>
    <economy></economy>
  </div>
</template>
<script>
import GlobalCase from './components/GlobalCase'
import GlobalList from './components/GlobalList'
import ChinaCaseLine from './components/ChinaCaseLine'
import HubeiCaseLine from './components/HubeiCaseLine'
import WuhanCaseLine from './components/WuhanCaseLine'
import AidDoctor from './components/AidDoctor'
import WorkRate from './components/WorkRate'
import ProvinceTrend from './components/ProvinceTrend'
import HubeiTrend from './components/HubeiTrend'
import Economy from './components/Economy'
import People from './components/People'
import HospitalMap from './components/HospitalMap'
export default {
  name: 'Epidemic',
  components: {
    GlobalCase,
    GlobalList,
    ChinaCaseLine,
    HubeiCaseLine,
    WuhanCaseLine,
    AidDoctor,
    WorkRate,
    ProvinceTrend,
    HubeiTrend,
    Economy,
    People,
    HospitalMap
  },
  data () {
    return {
      line: '全国',
      trend: '全国'
    }
  },
  methods: {
  }
}
</script>
<style>
.dashboard-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
.tab {
  padding: 20px 0px;
}
.chart-wrapper {
  background: #fff;
  padding: 16px 16px 0;
  margin-bottom: 32px;
}
</style>
