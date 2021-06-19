<template>
  <div class="wait">

  </div>
</template>

<style lang="css">
body.aaa{
  background-color: aqua;
}
</style>

<script>
export default {
  mounted() {
    var time = Math.floor( Math.random() * 5 + 3) * 1000
    document.body.className = 'aaa'
    this.$nextTick(() => {
      setTimeout(() => {
        this.$router.push({ path: '/click' })
      }, time);
    })
  },
  beforeDestroy() {
    document.body.className = ''
  }
}
</script>