<template>
  <div class="chartBackground">
    <div style="text-align:center;padding:15px;">
      <h3 style="margin-bottom:10px;">全球病例</h3>
      <el-row :gutter="20">
        <el-col :span="5">
          <div>序号</div>
        </el-col>
        <el-col :span="9">
          <div>国家</div>
        </el-col>
        <el-col :span="10">
          <div>确诊数量</div>
        </el-col>
      </el-row>
    </div>
<el-divider></el-divider>
    <el-scrollbar style="height:700px;text-align:center;">
      <div v-for="(item,index) in globalCase.features" :key="item.key">
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <el-tag>{{index+1}}</el-tag>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <span> {{item.properties.country}}</span>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <span>
                <strong>{{item.properties.case|capitalize}}</strong>
              </span>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      globalCase: {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$http
        .get('globalCase')
        .then(resp => {
          this.globalCase = resp.data
        })
        .catch(resp => {
          alert('获取数据失败！')
        })
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return parseFloat(value).toLocaleString()
    }
  }
}
</script>
