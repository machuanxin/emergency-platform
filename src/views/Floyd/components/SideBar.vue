<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" style="height:100%;" @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-data-line"></i>
        <span>时空统计分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">疫情信息</el-menu-item>
        <el-menu-item index="1-2">游行抗议</el-menu-item>
        <el-menu-item index="1-3">犯罪信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-link"></i>
        <span>时空关联分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1">疫情信息统计</el-menu-item>
        <el-menu-item index="2-2">犯罪信息统计</el-menu-item>
        <el-menu-item index="2-3">舆情信息统计</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-guide"></i>
        <span>时空演变分析</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">疫情信息统计</el-menu-item>
        <el-menu-item index="3-2">犯罪信息统计</el-menu-item>
        <el-menu-item index="3-3">舆情信息统计</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
import MSG from '../msg.js'
export default {
  methods: {
    handleSelect (key) {
      switch (key) {
        case '1-1':
          MSG.$emit('val', key)
          break
        case '1-2':
          MSG.$emit('val', key)
          break
        case '1-3':
          MSG.$emit('val', key)
          break
        case '2-1':
          MSG.$emit('val', key)
          break
        case '2-2':
          MSG.$emit('val', key)
          break
        case '2-3':
          MSG.$emit('val', key)
          break
        case '3-1':
          MSG.$emit('val', key)
          break
        case '3-2':
          MSG.$emit('val', key)
          break
        case '3-3':
          MSG.$emit('val', key)
          break
      }
    }
  }
}
</script>
