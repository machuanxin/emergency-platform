<template>
  <div>Traffic11111</div>
</template>
<script>
export default {
  name: 'traffic',
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
