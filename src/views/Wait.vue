<template>
  <div class="wait">
    Ready
  </div>
</template>

<style lang="css">
.wait {
  margin-top: 440px;
  display: flex;
  font-size: 64px;
  justify-content: center;
  align-items: center;
}
body.aaa {
  background-color: white;
}
</style>

<script>
export default {
  mounted() {
    var time = Math.floor(Math.random() * 5 + 3) * 1000;
    document.body.className = "aaa";
    this.$nextTick(() => {
      setTimeout(() => {
        this.$router.push({ path: "/click" });
      }, time);
    });
  },
  beforeDestroy() {
    document.body.className = "";
  },
};
</script>
