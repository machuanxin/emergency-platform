<template>
  <div>
    <div style="height:calc(100vh - 80px);">
      <el-row style="height:100%">
        <el-col :span="4" style="height:100%">
          <side-bar></side-bar>
        </el-col>
        <el-col :span="20" style="height:100%">
          <accident-map></accident-map>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import SideBar from './components/SideBar'
import AccidentMap from './components/AccidentMap'
export default {
  name: 'Floyd',
  data () {
    return {

    }
  },
  components: {
    SideBar,
    AccidentMap
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {

    }
  }
}
</script>
