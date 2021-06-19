<template>
  <div class="click" v-on:click="onButtonCliked">
    {{checktime}}
  </div>
</template>

<style lang="css">
.click {
  height: 100vh;
  overflow: hidden;
}
body.bbb{
  background-color: red;
}
</style>

<script>
export default {
  data() {
    return {
      loadTime: 0,
      clickTime: 0,
      checktime: 0
    }
  },
  mounted() {
    document.body.className = 'bbb'
    this.$nextTick(() => {
      let date = new Date()
      this.loadTime = date.getTime()
    })
  },
  beforeDestroy() {
    document.body.className = ''
  },
  methods: {
    onButtonCliked() {
      let date = new Date()
      this.clickTime = date.getTime()
      this.checktime = (this.clickTime - this.loadTime) / 1000
      console.log(this.checktime)
      this.$router.push({ path: '/wait' })
    }
  },
}
</script>