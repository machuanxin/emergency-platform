<template>
  <div>
    <header>
      <div class="header-f">
        <div class="logo">
          <a>
            <h3>应急大数据可视化系统</h3>
          </a>
        </div>
        <div class="nav">
          <ul>
            <li v-for="(item,index) in menu" :key=item.id @click='addClass(index)'>
              <router-link :to="{path: '/' + item.path + '/index'}" :class='{current:flag==index}'>{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {
      current: 'current',
      flag: 0,
      menu: [
        {
          id: 1,
          name: '新冠疫情',
          path: 'epidemic'
        },
        {
          id: 2,
          name: '犯罪事件',
          path: 'crime'
        },
        {
          id: 3,
          name: '交通事故',
          path: 'traffic'
        },
        {
          id: 4,
          name: '弗洛伊德事件',
          path: 'floyd'
        }
      ]
    }
  },
  mounted () {},
  methods: {
    addClass (index) {
      this.flag = index
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

header {
  width: 100%;
  height: 80px;
  min-width: 1000px;
  background: #092c74;
  /* box-shadow: 2px 3px 5px #ccc; */
}

a {
  text-decoration: none;
}

.header-f {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: auto;
}

.logo {
  font-size: 24px;
  height: 80px;
  line-height: 80px;
}

.logo a {
  color: #fff;
}

.nav ul {
  display: flex;
  justify-content: start;
}

.nav ul li {
  height: 80px;
  line-height: 80px;
  list-style: none;
  margin: 0 20px;
}

.nav ul li a {
  color: #fff;
}

.nav ul li a:hover {
  color: #ffd04b;
  cursor: pointer;
}

.current {
  color: #ffd04b !important;
  font-weight: bold !important;
}
</style>
