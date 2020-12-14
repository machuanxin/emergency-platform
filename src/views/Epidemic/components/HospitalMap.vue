<template>
  <div id="container" ref="container" >
    <baidu-map  ak="4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa" :center="mapParams.center" :zoom="mapParams.zoom" @ready="handler" style="height:670px;">
      <!--缩放-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT" />
      <!--选项卡-->
       <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
         <el-radio-group v-model="hospital" size="medium" @change="radioChange" style="margin:10px;">
           <el-radio-button label="方舱医院"></el-radio-button>
           <el-radio-button label="发热门诊" ></el-radio-button>
           <el-radio-button label="定点救治医疗机构"></el-radio-button>
           <el-radio-button label="定点核酸检测医院"></el-radio-button>
        </el-radio-group>
         </bm-control>
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmControl from 'vue-baidu-map/components/controls/Control'
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import hospitalimgUrl from '@/assets/hospital.png'
export default {
  name: 'Demo',
  components: {
    BaiduMap,
    BmControl,
    BmNavigation
  },
  data () {
    return {
      mapParams: {
        center: { lng: 114.305837, lat: 30.572601 },
        zoom: 11
      },
      BMap: '',
      map: '',
      hospital: '方舱医院',
      opts: {
        width: 0, // 信息窗口宽度
        height: 0, // 信息窗口高度
        enableMessage: true// 设置允许信息窗发送短息
      },
      cabinHospital: [
        {
          hospitalName: '武昌洪山体育馆方舱医院',
          longitude: 114.341055,
          latitude: 30.55204
        },
        {
          hospitalName: '江汉武汉国际会展中心方舱医院',
          longitude: 114.28024,
          latitude: 30.585599
        },
        {
          hospitalName: '东西湖武汉客厅方舱医院',
          longitude: 114.285652,
          latitude: 30.678134
        },
        {
          hospitalName: '硚口武汉体育馆方舱医院',
          longitude: 114.266484,
          latitude: 30.582875
        },
        {
          hospitalName: '武汉沌口方舱医院',
          longitude: 114.132422,
          latitude: 30.470517
        },
        {
          hospitalName: '武汉开发区武汉体育中心方舱医院',
          longitude: 114.178504,
          latitude: 30.507047
        },
        {
          hospitalName: '黄陂区体院馆方舱医院',
          longitude: 114.367332,
          latitude: 30.911936
        },
        {
          hospitalName: '光谷科技会展中心方舱医院',
          longitude: 114.515746,
          latitude: 30.495926
        },
        {
          hospitalName: '青山武钢体育中心方舱医院',
          longitude: 114.395902,
          latitude: 30.628344
        },
        {
          hospitalName: '江岸全民健身中心方舱医院',
          longitude: 114.290869,
          latitude: 30.64765
        },
        {
          hospitalName: '武汉体校方舱医院',
          longitude: 114.224495,
          latitude: 30.577522
        },
        {
          hospitalName: '汉阳国际博览中心方舱医院',
          longitude: 114.248387,
          latitude: 30.513182
        },
        {
          hospitalName: '江夏大花山方舱医院',
          longitude: 114.066463,
          latitude: 30.36358
        },
        {
          hospitalName: '蔡甸区知音谷方舱医院',
          longitude: 114.066463,
          latitude: 30.508293
        },
        {
          hospitalName: '方舱医院（石牌岭高级职业中学）',
          longitude: 114.349269,
          latitude: 30.530947
        },
        {
          hospitalName: '方舱医院（华侨城小学体育馆）',
          longitude: 114.388293,
          latitude: 30.594985
        }
      ],
      feverClinic: [
        {
          hospitalName: '武汉市中医医院',
          longitude: 114.304382,
          latitude: 30.594185
        },
        {
          hospitalName: '中部战区总医院',
          longitude: 114.315503,
          latitude: 30.620517
        },
        {
          hospitalName: '长航总医院',
          longitude: 114.293542,
          latitude: 30.61219
        },
        {
          hospitalName: '武汉市第八医院',
          longitude: 114.312578,
          latitude: 30.609258
        },
        {
          hospitalName: '武汉市中心医院',
          longitude: 114.301489,
          latitude: 30.586825
        },
        {
          hospitalName: '武汉市汉口医院',
          longitude: 114.307149,
          latitude: 30.631403
        },
        {
          hospitalName: '武汉儿童医院',
          longitude: 114.294232,
          latitude: 30.608655
        },
        {
          hospitalName: '武汉市第六医院',
          longitude: 114.296889,
          latitude: 30.605761
        },
        {
          hospitalName: '协和医院',
          longitude: 114.281196,
          latitude: 30.590103
        },
        {
          hospitalName: '湖北省中西医结合医院',
          longitude: 114.28002,
          latitude: 30.613649
        },
        {
          hospitalName: '武汉市中心医院（后湖院区）',
          longitude: 114.272054,
          latitude: 30.634495
        },
        {
          hospitalName: '武汉市红十字会医院',
          longitude: 114.279588,
          latitude: 30.619977
        },
        {
          hospitalName: '武汉亚洲心脏病医院',
          longitude: 114.288865,
          latitude: 30.58878
        },
        {
          hospitalName: '华中科技大学同济医学院附属同济医院',
          longitude: 114.267206,
          latitude: 30.58572
        },
        {
          hospitalName: '湖北省第三人民医院',
          longitude: 114.260775,
          latitude: 30.575313
        },
        {
          hospitalName: '武汉市第一医院',
          longitude: 114.278513,
          latitude: 30.578088
        },
        {
          hospitalName: '武汉市第四医院',
          longitude: 114.273049,
          latitude: 30.571961
        },
        {
          hospitalName: '武汉市肺科医院',
          longitude: 114.259917,
          latitude: 30.58771
        },
        {
          hospitalName: '武汉市第五医院',
          longitude: 114.278104,
          latitude: 30.553924
        },
        {
          hospitalName: '武汉市汉阳医院',
          longitude: 114.252377,
          latitude: 30.554658
        },
        {
          hospitalName: '武汉市中医医院（汉阳医院）',
          longitude: 114.221832,
          latitude: 30.525512
        },
        {
          hospitalName: '武汉龙阳医院',
          longitude: 114.217738,
          latitude: 30.552983
        },
        {
          hospitalName: '武汉大学人民医院',
          longitude: 114.305953,
          latitude: 30.540879
        },
        {
          hospitalName: '武汉大学中南医院',
          longitude: 114.359069,
          latitude: 30.559432
        },
        {
          hospitalName: '武汉科技大学附属天佑医院',
          longitude: 114.332938,
          latitude: 30.530591
        },
        {
          hospitalName: '湖北省中医院',
          longitude: 114.316364,
          latitude: 30.555994
        },
        {
          hospitalName: '武汉市第三医院',
          longitude: 114.30932,
          latitude: 30.546391
        },
        {
          hospitalName: '武汉市武昌医院',
          longitude: 114.347663,
          latitude: 30.608794
        },
        {
          hospitalName: '武汉市第七医院',
          longitude: 114.338093,
          latitude: 30.548309
        },
        {
          hospitalName: '武警湖北省总队医院',
          longitude: 114.320079,
          latitude: 30.550236
        },
        {
          hospitalName: '解放军中部战区总医院',
          longitude: 114.350912,
          latitude: 30.53708
        },
        {
          hospitalName: '华润武钢总医院',
          longitude: 114.410101,
          latitude: 30.637855
        },
        {
          hospitalName: '武汉市普仁医院',
          longitude: 114.387046,
          latitude: 30.637524
        },
        {
          hospitalName: '武汉市武东医院',
          longitude: 114.468962,
          latitude: 30.580831
        },
        {
          hospitalName: '武钢第二职工医院',
          longitude: 114.494024,
          latitude: 30.608931
        },
        {
          hospitalName: '武汉市第九医院',
          longitude: 114.386174,
          latitude: 30.629789
        },
        {
          hospitalName: '武汉市石化医院',
          longitude: 114.439668,
          latitude: 30.663105
        },
        {
          hospitalName: '武汉市第三医院（光谷院区）',
          longitude: 114.417766,
          latitude: 30.504676
        },
        {
          hospitalName: '湖北省中医院（光谷院区）',
          longitude: 114.415138,
          latitude: 30.511842
        },
        {
          hospitalName: '湖北省妇幼保健院',
          longitude: 114.358556,
          latitude: 30.534222
        },
        {
          hospitalName: '湖北省荣军医院',
          longitude: 114.384105,
          latitude: 30.512196
        },
        {
          hospitalName: '华中科技大学同济医学院附属同济医院（光谷院区）',
          longitude: 114.470399,
          latitude: 30.493669
        },
        {
          hospitalName: '武汉大学人民医院（东院）',
          longitude: 114.447353,
          latitude: 30.447225
        },
        {
          hospitalName: '华中科技大学同济医学院附属梨园医院',
          longitude: 114.385021,
          latitude: 30.58859
        },
        {
          hospitalName: '武汉市蔡甸人民医院',
          longitude: 114.050683,
          latitude: 30.568141
        },
        {
          hospitalName: '武汉市蔡甸中医医院',
          longitude: 114.033814,
          latitude: 30.583151
        },
        {
          hospitalName: '武汉济和医院',
          longitude: 114.038912,
          latitude: 30.577508
        },
        {
          hospitalName: '华中科技大学同济医学院附属同济医院（中法新城院区）',
          longitude: 114.12036,
          latitude: 30.555374
        },
        {
          hospitalName: '武汉市江夏区第一人民医院',
          longitude: 114.327031,
          latitude: 30.377022
        },
        {
          hospitalName: '武汉市江夏区中医医院',
          longitude: 114.324237,
          latitude: 30.34901
        },
        {
          hospitalName: '江夏区纸坊街社区卫生服务中心',
          longitude: 114.326146,
          latitude: 30.359306
        },
        {
          hospitalName: '武汉市东西湖区人民医院',
          longitude: 114.139361,
          latitude: 30.65512
        },
        {
          hospitalName: '武汉太康医院',
          longitude: 114.160525,
          latitude: 30.643579
        },
        {
          hospitalName: '武汉市新洲区人民医院',
          longitude: 114.810169,
          latitude: 30.848914
        },
        {
          hospitalName: '湖北省第三人民医院（阳逻院区）',
          longitude: 114.589098,
          latitude: 30.683516
        },
        {
          hospitalName: '武汉市新洲区中医医院',
          longitude: 114.81208,
          latitude: 30.857793
        },
        {
          hospitalName: '武汉市黄陂区人民医院',
          longitude: 114.37744,
          latitude: 30.894385
        },
        {
          hospitalName: '武汉市黄陂区中医医院',
          longitude: 114.382779,
          latitude: 30.878196
        },
        {
          hospitalName: '华中科技大学同济医学院附属协和医院（西院）',
          longitude: 114.180748,
          latitude: 30.498577
        },
        {
          hospitalName: '武汉亚心总医院',
          longitude: 114.210078,
          latitude: 30.507032
        },
        {
          hospitalName: '武汉市汉南区人民医院',
          longitude: 114.079551,
          latitude: 30.319436
        }
      ],
      medicalInstitution: [
        {
          hospitalName: '武汉市汉口医院',
          longitude: 114.307149,
          latitude: 30.631403
        },
        {
          hospitalName: '武汉市肺科医院',
          longitude: 114.259917,
          latitude: 30.58771
        },
        {
          hospitalName: '武汉市蔡甸人民医院',
          longitude: 114.050683,
          latitude: 30.568141
        },
        {
          hospitalName: '武汉市江夏区第一人民医院',
          longitude: 114.327031,
          latitude: 30.377022
        },
        {
          hospitalName: '武汉市东西湖区人民医院',
          longitude: 114.139361,
          latitude: 30.65512
        },
        {
          hospitalName: '武汉市新洲区人民医院',
          longitude: 114.810169,
          latitude: 30.848914
        },
        {
          hospitalName: '武汉市黄陂区人民医院',
          longitude: 114.37744,
          latitude: 30.894385
        },
        {
          hospitalName: '武汉市汉南区人民医院',
          longitude: 114.079551,
          latitude: 30.319436
        },
        {
          hospitalName: '武汉市金银潭医院',
          longitude: 114.291555,
          latitude: 30.67258
        }
      ],
      detectionInstitution: [
        {
          hospitalName: '长航总医院',
          longitude: 114.293542,
          latitude: 30.61219
        },
        {
          hospitalName: '武汉市中心医院',
          longitude: 114.301489,
          latitude: 30.586825
        },
        {
          hospitalName: '武汉市第六医院',
          longitude: 114.296889,
          latitude: 30.605761
        },
        {
          hospitalName: '协和医院',
          longitude: 114.281196,
          latitude: 30.590103
        },
        {
          hospitalName: '湖北省中西医结合医院',
          longitude: 114.28002,
          latitude: 30.613649
        },
        {
          hospitalName: '华中科技大学同济医学院附属同济医院',
          longitude: 114.267206,
          latitude: 30.58572
        },
        {
          hospitalName: '湖北省第三人民医院',
          longitude: 114.260775,
          latitude: 30.575313
        },
        {
          hospitalName: '武汉市第一医院',
          longitude: 114.278513,
          latitude: 30.578088
        },
        {
          hospitalName: '武汉市第四医院',
          longitude: 114.273049,
          latitude: 30.571961
        },
        {
          hospitalName: '武汉市肺科医院',
          longitude: 114.259917,
          latitude: 30.58771
        },
        {
          hospitalName: '武汉市第五医院',
          longitude: 114.278104,
          latitude: 30.553924
        },
        {
          hospitalName: '武汉市汉阳医院',
          longitude: 114.252377,
          latitude: 30.554658
        },
        {
          hospitalName: '武汉大学人民医院',
          longitude: 114.305953,
          latitude: 30.540879
        },
        {
          hospitalName: '武汉大学中南医院',
          longitude: 114.359069,
          latitude: 30.559432
        },
        {
          hospitalName: '武汉科技大学附属天佑医院',
          longitude: 114.332938,
          latitude: 30.530591
        },
        {
          hospitalName: '湖北省中医院',
          longitude: 114.316364,
          latitude: 30.555994
        },
        {
          hospitalName: '武汉市第三医院',
          longitude: 114.30932,
          latitude: 30.546391
        },
        {
          hospitalName: '武汉市武昌医院',
          longitude: 114.347663,
          latitude: 30.608794
        },
        {
          hospitalName: '华润武钢总医院',
          longitude: 114.410101,
          latitude: 30.637855
        },
        {
          hospitalName: '武汉市普仁医院',
          longitude: 114.387046,
          latitude: 30.637524
        },
        {
          hospitalName: '武汉大学人民医院（东院）',
          longitude: 114.447353,
          latitude: 30.447225
        },
        {
          hospitalName: '华中科技大学同济医学院附属梨园医院',
          longitude: 114.385021,
          latitude: 30.58859
        },
        {
          hospitalName: '武汉市黄陂区人民医院',
          longitude: 114.37744,
          latitude: 30.894385
        },
        {
          hospitalName: '湖北省肿瘤医院',
          longitude: 114.37116,
          latitude: 30.50658
        }
      ]
    }
  },
  methods: {
    handler ({ BMap, map }) {
      // 赋值，方便调用，本节被用到
      this.BMap = BMap
      this.map = map
      map.enableScrollWheelZoom() // 启动鼠标滚轮操作
      this.map.clearOverlays()
      var icon = new this.BMap.Icon(hospitalimgUrl, new this.BMap.Size(30, 38))
      for (var i = 0; i < this.cabinHospital.length; i++) {
        var point = new this.BMap.Point(this.cabinHospital[i].longitude, this.cabinHospital[i].latitude)
        var marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
        var content = this.cabinHospital[i].hospitalName
        this.map.addOverlay(marker) // 将标注添加到地图中
        this.addClickHandler(content, marker)
      }
    },
    radioChange () {
      this.map.clearOverlays()
      var icon = new this.BMap.Icon(hospitalimgUrl, new this.BMap.Size(30, 38))
      var i = 0
      switch (this.hospital) {
        case '方舱医院':
          for (i = 0; i < this.cabinHospital.length; i++) {
            var point = new this.BMap.Point(this.cabinHospital[i].longitude, this.cabinHospital[i].latitude)
            var marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
            var content = this.cabinHospital[i].hospitalName
            this.map.addOverlay(marker) // 将标注添加到地图中
            this.addClickHandler(content, marker)
          }
          break
        case '发热门诊':
          for (i = 0; i < this.feverClinic.length; i++) {
            point = new this.BMap.Point(this.feverClinic[i].longitude, this.feverClinic[i].latitude)
            marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
            content = this.feverClinic[i].hospitalName
            this.map.addOverlay(marker) // 将标注添加到地图中
            this.addClickHandler(content, marker)
          }
          break
        case '定点救治医疗机构':
          for (i = 0; i < this.medicalInstitution.length; i++) {
            point = new this.BMap.Point(this.medicalInstitution[i].longitude, this.medicalInstitution[i].latitude)
            marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
            content = this.medicalInstitution[i].hospitalName
            this.map.addOverlay(marker) // 将标注添加到地图中
            this.addClickHandler(content, marker)
          }
          break
        case '定点核酸检测医院':
          for (i = 0; i < this.detectionInstitution.length; i++) {
            point = new this.BMap.Point(this.detectionInstitution[i].longitude, this.detectionInstitution[i].latitude)
            marker = new this.BMap.Marker(point, { icon: icon }) // 创建标注
            content = this.detectionInstitution[i].hospitalName
            this.map.addOverlay(marker) // 将标注添加到地图中
            this.addClickHandler(content, marker)
          }
          break
        default:
          break
      }
    },
    addClickHandler (content, marker) {
      var _this = this
      marker.addEventListener('click', function (e) {
        var point = new _this.BMap.Point(e.target.getPosition().lng, e.target.getPosition().lat)
        var infoWindow = new _this.BMap.InfoWindow(content, _this.opts) // 创建信息窗口对象
        this.map.openInfoWindow(infoWindow, point) // 开启信息窗口
      }
      )
    }
  }
}
</script>
