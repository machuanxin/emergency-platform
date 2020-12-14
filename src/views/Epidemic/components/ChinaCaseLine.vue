<template>
  <div class="chartBackground" style="height:600px;">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <china-case v-if="activeName==item.key" :type="item.key" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ChinaCase from './line/ChinaCase'

export default {
  name: 'ChinaCaseLine',
  components: { ChinaCase },
  data () {
    return {
      activeName: '1',
      tabMapOptions: [
        { label: '确诊', key: '1' },
        { label: '重症', key: '2' },
        { label: '死亡', key: '3' },
        { label: '治愈', key: '4' },
        { label: '疑似', key: '5' },
        { label: '治愈率/死亡率', key: '6' }
      ]
    }
  }
}
</script>
