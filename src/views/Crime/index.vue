<template>
  <div>Crime11111</div>
</template>
<script>
export default {
  name: 'Crime',
  data () {
    return {
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$http.get('crime').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
