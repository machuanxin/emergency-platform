<template>
  <div class="chartBackground" style="height:600px;">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <wuhan-case v-if="activeName==item.key" :type="item.key" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WuhanCase from './line/WuhanCase'

export default {
  name: 'WuhanCaseLine',
  components: { WuhanCase },
  data () {
    return {
      activeName: '1',
      tabMapOptions: [
        { label: '确诊病例', key: '1' },
        { label: '死亡病例', key: '2' },
        { label: '治愈病例', key: '3' },
        { label: '治愈率/死亡率', key: '4' }
      ]
    }
  }
}
</script>
