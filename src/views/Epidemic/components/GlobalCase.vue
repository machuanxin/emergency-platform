<template>
  <div ref="container">
    <div id="map" style="height:800px">
      <div class="updateTimeDiv">
        <span>新型冠状病毒肺炎疫情分布（数据更新:2020年11月20日，数据来源：美国约翰斯·霍普金斯大学）</span>
      </div>
      <div class="legend">
        <ul>
          <li>
            <span class="colorContainer">
              <i class="legendColor" style="width:56px;height:56px;" />
            </span>
            <span class="legendRange">大于500万</span>
          </li>
          <li>
            <span class="colorContainer">
              <i class="legendColor" style="width:40px;height:40px;" />
            </span>
            <span class="legendRange">50万-500万</span>
          </li>
          <li>
            <span class="colorContainer">
              <i class="legendColor" style="width:28px;height:28px;" />
            </span>
            <span class="legendRange">10万-50万</span>
          </li>
          <li>
            <span class="colorContainer">
              <i class="legendColor" style="width:20px;height:20px;" />
            </span>
            <span class="legendRange">1万-10万</span>
          </li>
          <li>
            <span class="colorContainer">
              <i class="legendColor" style="width:12px;height:12px;" />
            </span>
            <span class="legendRange">小于1万</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import mapboxgl from 'mapbox-gl'
export default {
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      mapboxgl.accessToken =
        'pk.eyJ1IjoiMjQ0MTI2NDI3IiwiYSI6ImNrYXY4NHZlMzEyZncyemwydXM1ZnhicHkifQ.GgjxnQDXNoB6q7fnCcU62Q'
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [20, 20], // 设置地图中心
        zoom: 1 // 设置地图比例
      })
      var geojsonPoints = {}
      this.$http.get('globalCase').then(resp => {
        geojsonPoints = resp.data
      })
        .catch(resp => {
          alert('获取数据失败！')
        })
      map.on('load', function () {
        // Add a single point to the map
        map.addSource('geodataPoint', {
          type: 'geojson',
          data: geojsonPoints
        })

        map.addLayer({
          id: 'pointlayer',
          type: 'circle',
          source: 'geodataPoint',
          paint: {
            'circle-radius': ['get', 'size'],
            'circle-color': '#FF8D26'
          }
        })

        map.addLayer({
          id: 'pointlayerhighlight',
          type: 'circle',
          source: 'geodataPoint',
          paint: {
            'circle-radius': ['get', 'size'],
            'circle-color': '#0000ff'
          },
          filter: ['in', 'name', '']
        })

        map.on('click', 'pointlayer', function (e) {
          var feature = e.features[0]
          map.setFilter('pointlayerhighlight', [
            'in',
            'name',
            feature.properties.country
          ])
          var popup = new mapboxgl.Popup({
            closeButton: true
          })
          popup.setLngLat(feature.geometry.coordinates).setHTML(
            '地区:' + feature.properties.country + '</br>累计确诊人数:' + feature.properties.case
          )
            .addTo(map)
        })
      })
    }
  }
}
</script>
<style scoped>
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css");
ul {
  padding: 20px 16px 20px;
}
li {
  display: flex;
  align-items: center;
}
#map {
  position: relative;
}
.updateTimeDiv {
  position: absolute;
  font-size: 20px;
  top: 0;
  left: 0;
  opacity: 0.8;
  background: #385168;
  padding: 15px;
  color: #ffffff;
  width: 100%;
  height: 20px;
  z-index: 9999;
}
.legend {
  position: absolute;
  border-radius: 8px;
  bottom: 20px;
  right: 20px;
  width: 165px;
  height: 230px;
  z-index: 9999;
  background: rgb(56, 81, 104);
}
.colorContainer {
  width: 56px;
  text-align: center;
  line-height: 25px;
  margin-right: 10px;
}
.legendColor {
  display: inline-block;
  margin: auto;
  border-radius: 50%;
  background: rgb(255, 141, 38);
}
.legendRange {
  color: #ffffff;
  font-size: 12px;
}
</style>
