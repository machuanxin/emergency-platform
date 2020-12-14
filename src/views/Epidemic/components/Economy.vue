<template>
  <div class="container">
    <h2 style="margin:30px">2020年武汉市一季度经济运行情况</h2>
    <div class="tip">
      <p>数据说明：数据来源于武汉市统计局，以下显示百分比蓝色为同比去年下降数值，红色为同比增长数值</p>
    </div>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :lg="6">
        <div class="chart-wrapper">
          <p class="text">GDP</p>
          <el-progress type="circle" :percentage="40.5" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <div class="chart-wrapper">
          <p class="text">第一产业增加值</p>
          <el-progress type="circle" :percentage="36.4" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <div class="chart-wrapper">
          <p class="text">第二产业增加值</p>
          <el-progress type="circle" :percentage="45.4" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <div class="chart-wrapper">
          <p class="text">第三产业增加值</p>
          <el-progress type="circle" :percentage="37.7" />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="progress-wrapper">
          <p class="text">出口受到冲击，进口额保持增长</p>
          <span>进出口总额396.30亿元</span>
          <el-progress :percentage="16.1" />
          <span>出口额173.30亿元</span>
          <el-progress :percentage="38.4" />
          <span>进口额223.00亿元</span>
          <el-progress :percentage="16.8" :color="color" />
          <span>实际利用外资8.61亿美元</span>
          <el-progress :percentage="73.1" />
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="progress-wrapper">
          <p class="text">服务业生产减缓，信息技术服务业受损相对较小</p>
          <span>规模以上服务业营业收入</span>
          <el-progress :percentage="57.6" />
          <span>其他营利性服务业营业收入</span>
          <el-progress :percentage="46.0" />
          <span>信息传输、软件和信息技术服务业</span>
          <el-progress :percentage="25.4" />
          <span>租赁和商务服务业</span>
          <el-progress :percentage="43.4" />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}" style="margin-bottom:30px;">
        <div class="progress-wrapper">
          <p class="text">市场消费减少，各类商品销售逐步回暖</p>
          <span>社会消费品零售总额994.74亿元</span>
          <el-progress :percentage="45.7" />
          <span>限额以上社会消费品零售额</span>
          <el-progress :percentage="45.4" />
          <span>黑色金属冶炼和压延加工业</span>
          <el-progress :percentage="18.2" />
          <span>电力、热力生产和供应业</span>
          <el-progress :percentage="19.8" />
          <span>石油、煤炭及其他燃料加工业增加值</span>
          <el-progress :percentage="32.3" />
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}" style="margin-bottom:30px;">
        <div class="progress-wrapper">
          <p class="text">财政收支降幅较大，金融市场运行平稳</p>
          <span>公共预算总收入571.44亿元</span>
          <el-progress :percentage="44.0" />
          <span>地方一般公共预算收入275.77亿元</span>
          <el-progress :percentage="45.9" />
          <span>税收收入247.94亿元</span>
          <el-progress :percentage="44.4" />
          <span>融机构本外币存款29034.01亿元</span>
          <el-progress :percentage="5.7" :color="color" />
          <span>本外币贷款余额33528.02亿元</span>
          <el-progress :percentage="12.5" :color="color" />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="progress-wrapper">
          <p class="text">工业生产下降，当月降幅环比收窄；农业生产放缓，蔬菜产量降幅较小</p>
          <span>规模以上工业增加值</span>
          <el-progress :percentage="39.7" />
          <span>烟草制品业</span>
          <el-progress :percentage="9.2" :color="color" />
          <span>黑色金属冶炼和压延加工业</span>
          <el-progress :percentage="18.2" />
          <span>电力、热力生产和供应业</span>
          <el-progress :percentage="19.8" />
          <span>石油、煤炭及其他燃料加工业增加值</span>
          <el-progress :percentage="32.3" />
          <span>农林牧渔及其服务业总产值105.30亿元</span>
          <el-progress :percentage="45.9" />
          <span>蔬菜产量</span>
          <el-progress :percentage="24.2" />
          <span>水产品产量</span>
          <el-progress :percentage="54.9" />
        </div>
      </el-col>
       <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 12}">
        <div class="progress-wrapper">
          <p class="text">CPI涨幅扩大，食品价格上涨明显</p>
          <span>居民消费价格</span>
          <el-progress :percentage="6.0" :color="color" />
          <span>食品烟酒</span>
          <el-progress :percentage="16.6" :color="color" />
          <span>衣着</span>
          <el-progress :percentage="2.6" :color="color" />
          <span>居住</span>
          <el-progress :percentage="1.9" :color="color" />
          <span>生活用品及服务</span>
          <el-progress :percentage="1.0" />
          <span>交通和通信</span>
          <el-progress :percentage="0.9" />
          <span>教育文化和娱乐</span>
          <el-progress :percentage="0.9" :color="color" />
          <span>医疗保健</span>
          <el-progress :percentage="1.1" :color="color" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Economy',
  data () {
    return {
      color: 'red'
    }
  }
}
</script>

<style scoped>
.container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;
}
.tip {
  width: 100%;
  margin: auto;
  padding: 2px 2px;
  background-color: rgb(254, 240, 240);
  border-radius: 4px;
  border-left: 5px solid #f56c6c;
  font-size: 15px;
  margin-bottom: 16px;
}
.chart-wrapper {
  background: #fff;
  text-align: center;
  padding: 16px 0;
  margin-bottom: 32px;
}
.progress-wrapper {
  background: #fff;
  padding: 16px 22px;
  margin-bottom: 32px;
}
.text {
  font-weight: bold;
  text-align: center;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
}
span {
  font-size: 12px;
}
</style>
