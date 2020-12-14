<template>
  <div style="height:100%;width:100%;">
    <div id="map">
    </div>
    <!-- <div id="anchor"><img src="@/assets/fire.png" alt="示例锚点" /></div> -->
    <div v-if="msg === '1-1'" class="chartDiv">
      <i class="el-alert__closebtn el-icon-close" @click="closeChart"></i>
      <epidemic-chart></epidemic-chart>
    </div>
    <div v-else-if="msg === '1-3'" class="chartDiv">
      <i class="el-alert__closebtn el-icon-close" @click="closeChart"></i>
      <crime-chart></crime-chart>
    </div>
  </div>
</template>

<script>
import MSG from '../msg'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
// import Overlay from 'ol/Overlay'
import EpidemicChart from './EpidemicChart'
import CrimeChart from './CrimeChart'
import Vector from 'ol/source/Vector'
import GeoJSON from 'ol/format/GeoJSON'
import Heatmap from 'ol/layer/Heatmap'
export default {
  data () {
    return {
      map: null,
      msg: ''
    }
  },
  components: {
    EpidemicChart,
    CrimeChart
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          projection: 'EPSG:4326', // 使用这个坐标系
          center: [-93.26667, 44.983334],
          zoom: 5
        })
      })
      // var anchor = new Overlay({
      //   element: document.getElementById('anchor')
      // })
      // // 关键的一点，需要设置附加到地图上的位置
      // anchor.setPosition([-93.36667, 45.083334])
      // // 然后添加到map上
      // this.map.addOverlay(anchor)
      var _this = this
      MSG.$on('val', function (val) {
        _this.msg = val
        if (_this.msg === '1-2') {
          _this.$http.get('protest').then(resp => {
            var vectorSource = new Vector({
              features: new GeoJSON().readFeatures(resp.data['list'])
            })
            // Heatmap热力图
            var vector = new Heatmap({
              source: vectorSource,
              blur: 10,
              radius: 2
            })
            _this.map.addLayer(vector)
          })
        }
      })
    },
    closeChart () {
      this.msg = ''
    }
  }
}
</script>

<style>
#map {
  height: 100%;
  width: 100%;
}
</style>
